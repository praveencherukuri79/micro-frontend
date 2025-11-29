# Module Federation Integration Flow

This document explains how remotes are integrated using Webpack Module Federation in this micro-frontend architecture.

---

## 📋 Overview

```
Remote → Expose Module → Build remoteEntry.js → Host Imports Dynamically → Mount Remote
```

---

## 🔄 Complete Flow

### **1. Remote: Expose Module**

Each remote exposes specific modules via Module Federation configuration.

#### **Example 1: React Remote (Products) - Vite**

**Federation Config** (`remotes/products/.config/module-federation/federation.config.ts`):

```typescript
export const federationConfig = {
  name: "productsApp",
  filename: "remoteEntry.js",
  exposes: {
    "./ProductsPage": "./src/ProductsPage", // Exposed component
  },
  shared: ["react", "react-dom", "@mui/material", "zustand"],
};
```

**Vite Config** (`remotes/products/vite.config.ts`):

```typescript
import federation from "@originjs/vite-plugin-federation";
import { federationConfig } from "./.config/module-federation/federation.config";

export default defineConfig({
  plugins: [react(), federation(federationConfig)],
  build: {
    modulePreload: false, // Required for MF
    target: "esnext",
  },
});
```

**Exposed Component** (`remotes/products/src/ProductsPage.tsx`):

```typescript
// Standard React component
export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const addToCart = useProductStore((state) => state.addToCart);

  return (
    <Container>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} md={4} key={product.id}>
            <Card>
              <CardMedia image={product.image} />
              <CardContent>
                <Typography>{product.name}</Typography>
                <Button onClick={() => addToCart(product)}>Add to Cart</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
```

**Build Output**:

```
remotes/products/dist/
  ├── remoteEntry.js              (MF entry point)
  ├── assets/
  │   ├── ProductsPage-abc123.js
  │   ├── vendor-xyz789.js
  │   └── shared-def456.js
  └── index.html
```

#### **Example 2: Angular Remote (Webpack)**

**Webpack Federation Config** (`remotes/angular-webpack/.config/module-federation/module-federation.config.js`):

```javascript
const {
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "angularWebpack",
  filename: "remoteEntry.js",
  exposes: {
    "./App": "./src/angular-remote.ts", // Exposed entry point
  },
  shared: shareAll({
    singleton: true,
    strictVersion: true,
  }),
});
```

**Async Boundary Entry** (`remotes/angular-webpack/src/angular-remote.ts`):

```typescript
export default async function mount(
  container: HTMLElement,
  theme: ThemeMode = "light"
): Promise<() => void> {
  // Dynamic import creates async boundary
  const { bootstrapAngularComponent } = await import("./bootstrap-mf");
  return await bootstrapAngularComponent(container, theme);
}
```

**Bootstrap File** (`remotes/angular-webpack/src/bootstrap-mf.ts`):

```typescript
import "zone.js"; // Must load before Angular
import { createApplication } from "@angular/platform-browser";
import { createComponent } from "@angular/core";
import { AppComponent } from "./components/app/app.component";

export async function bootstrapAngularComponent(
  container: HTMLElement,
  theme: ThemeMode
): Promise<() => void> {
  const mountPoint = document.createElement("div");
  container.appendChild(mountPoint);

  // Create Angular application
  const appRef = await createApplication({ providers: [] });

  // Create and attach component
  const componentRef = createComponent(AppComponent, {
    environmentInjector: appRef.injector.get(EnvironmentInjector),
    hostElement: mountPoint,
  });

  componentRef.instance.initialTheme = theme;
  appRef.injector.get(ApplicationRef).attachView(componentRef.hostView);

  // Return unmount function
  return () => {
    componentRef.destroy();
    appRef.destroy();
    mountPoint.remove();
  };
}
```

**Build Output**:

```
remotes/angular-webpack/dist/angular-webpack/
  ├── remoteEntry.js          (MF entry point)
  ├── main.js
  ├── polyfills.js
  └── vendor.js
```

---

### **2. Host: Configure Remote Endpoints**

**Host Federation Config** (`host/vite.config.ts`):

```typescript
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host",
      remotes: {
        productsApp: "http://localhost:5001/assets/remoteEntry.js",
        angularWebpack: "http://localhost:5004/assets/remoteEntry.js",
      },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
        "@mui/material": { singleton: true },
        zustand: { singleton: true },
      },
    }),
  ],
});
```

**TypeScript Declarations** (`host/src/remotes.d.ts`):

```typescript
// React Remote (Products) - exports component directly
declare module "productsApp/ProductsPage" {
  const ProductsPage: React.ComponentType;
  export default ProductsPage;
}

// Angular Remote (Webpack) - exports mount function
declare module "angularWebpack/App" {
  export default function mount(
    container: HTMLElement,
    theme: "light" | "dark"
  ): Promise<() => void>;
}
```

---

### **3. Host: Dynamic Import & Mount**

**Custom Hook** (`host/src/hooks/useModuleFederationRemote.ts`):

```typescript
export const useModuleFederationRemote = (
  remoteName: string,
  remoteModule: string,
  containerId: string
) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const theme = useThemeStore((state) => state.mode);
  const unmountRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    let mounted = true;

    const loadRemote = async () => {
      try {
        // Dynamic import from remote
        const remote = await import(
          /* @vite-ignore */
          `${remoteName}/${remoteModule}`
        );

        if (!mounted) return;

        // Mount the remote
        const unmount = await remote.mount(containerId, theme);
        unmountRef.current = unmount;
        setLoading(false);
      } catch (err) {
        if (!mounted) return;
        setError(err as Error);
        setLoading(false);
      }
    };

    loadRemote();

    // Cleanup
    return () => {
      mounted = false;
      if (unmountRef.current) {
        unmountRef.current();
        unmountRef.current = null;
      }
    };
  }, [remoteName, remoteModule, containerId, theme]);

  return { loading, error };
};
```

---

### **4. Host: Render in Page**

#### **React Remote (Products) - Direct Component Import**

**Page Component** (`host/src/pages/ProductsPage.tsx`):

```typescript
import { Suspense, lazy } from "react";
import { CircularProgress } from "@mui/material";

// Lazy load the remote component
const RemoteProductsPage = lazy(
  () => import("productsApp/ProductsPage") // Dynamic import
);

export const ProductsPage = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <RemoteProductsPage />
    </Suspense>
  );
};
```

**Runtime Flow**:

1. User navigates to `/products`
2. React lazy loads `productsApp/ProductsPage`
3. Fetches `http://localhost:5001/assets/remoteEntry.js`
4. Module Federation resolves shared dependencies (React, MUI, Zustand)
5. Loads `ProductsPage` component
6. Renders directly in React tree

#### **Angular Remote (Webpack) - Mount Function**

**Page Component** (`host/src/pages/AngularWebpackPage.tsx`):

```typescript
export const AngularWebpackPage = () => {
  const { loading, error } = useModuleFederationRemote(
    "angularWebpack", // Remote name (from vite.config.ts)
    "App", // Exposed module (from remote's exposes config)
    "angular-webpack-container" // DOM container ID
  );

  if (loading) return <CircularProgress />;
  if (error) return <RemoteErrorFallback error={error} />;

  return (
    <Box sx={{ p: 3 }}>
      <div id="angular-webpack-container" />
    </Box>
  );
};
```

**Runtime Flow**:

1. `useModuleFederationRemote` hook executes
2. Dynamically imports `angularWebpack/App` → Fetches `http://localhost:5004/assets/remoteEntry.js`
3. Module Federation resolves dependencies
4. Calls `mount(containerElement, "dark")`
5. Angular async boundary loads `zone.js`
6. Bootstraps Angular application
7. Creates and attaches `AppComponent` to container

---

### **5. Why Two Different Patterns?**

#### **Pattern 1: Direct Component Export (React/Products)**

Used when the **host and remote use the same framework** (React).

**Advantages**:

- ✅ Simpler integration (just import component)
- ✅ No manual mounting/unmounting
- ✅ Uses React's built-in Suspense and lazy loading
- ✅ Automatic cleanup

**When to use**: React-to-React, Vue-to-Vue integration

#### **Pattern 2: Mount Function (Angular/Webpack)**

Used when **host and remote use different frameworks** or need custom lifecycle.

**Advantages**:

- ✅ Framework-agnostic (can mount any framework)
- ✅ Full control over mount/unmount lifecycle
- ✅ Can pass runtime configuration (theme, user, etc.)
- ✅ Handles async bootstrapping (Angular's zone.js)

**When to use**: Cross-framework integration (React host + Angular remote)

---

### **6. Angular Async Boundary Pattern**

Angular with Webpack requires the **async boundary pattern** to prevent eager consumption of shared modules.

**Why?**

- Angular needs `zone.js` loaded before any Angular code runs
- Without async boundary, Module Federation loads Angular modules eagerly
- This causes `zone.js` initialization errors

**Solution**:

**Step 1**: Export async function (`angular-remote.ts`):

```typescript
export default async function mount(
  container: HTMLElement,
  theme: ThemeMode
): Promise<() => void> {
  // Dynamic import creates async boundary
  const { bootstrapAngularComponent } = await import("./bootstrap-mf");
  return await bootstrapAngularComponent(container, theme);
}
```

**Step 2**: Bootstrap in separate file (`bootstrap-mf.ts`):

```typescript
import "zone.js"; // Loads first
import { createApplication, createComponent } from "@angular/platform-browser";
import { AppComponent } from "./components/app/app.component";

export async function bootstrapAngularComponent(
  container: HTMLElement,
  theme: ThemeMode
): Promise<() => void> {
  const mountPoint = document.createElement("div");
  container.appendChild(mountPoint);

  const appRef = await createApplication({ providers: [] });
  const componentRef = createComponent(AppComponent, {
    environmentInjector: appRef.injector.get(EnvironmentInjector),
    hostElement: mountPoint,
  });

  componentRef.instance.initialTheme = theme;

  return () => {
    componentRef.destroy();
    appRef.destroy();
  };
}
```

---

## 🎨 Theme Integration

### **Pattern 1: React Remote (Products) - Shared ThemeProvider**

React remotes can use the **host's ThemeProvider** since they're in the same React tree.

**Host provides theme**:

```typescript
// host/src/App.tsx
import { ThemeProvider } from "@mui/material";

function App() {
  const theme = useMemo(() => createTheme({ palette: { mode } }), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </ThemeProvider>
  );
}
```

**Remote automatically inherits theme**:

```typescript
// remotes/products/src/ProductsPage.tsx
export default function ProductsPage() {
  const theme = useTheme(); // Gets theme from host's ThemeProvider!

  return (
    <Card>
      <Typography color={theme.palette.text.primary}>
        Automatically themed!
      </Typography>
    </Card>
  );
}
```

### **Pattern 2: Angular Remote (Webpack) - Mount Function Parameter**

Cross-framework remotes receive theme via mount function parameter.

**Host passes theme**:

```typescript
// In useModuleFederationRemote hook
const theme = useThemeStore((state) => state.mode); // "dark"
const remote = await import("angularWebpack/App");
await remote.default(containerElement, theme);
```

**Remote receives and applies**:

```typescript
// remotes/angular-webpack/src/bootstrap-mf.ts
export async function bootstrapAngularComponent(
  container: HTMLElement,
  theme: ThemeMode
): Promise<() => void> {
  const appRef = await createApplication({ providers: [] });
  const componentRef = createComponent(AppComponent, { ... });

  // Pass theme to component
  componentRef.instance.initialTheme = theme;

  // Set theme in service
  const themeService = componentRef.injector.get(ThemeService);
  themeService.setTheme(theme);

  return unmount;
}
```

### **Theme Updates**

**React Remote**: Automatic (uses React Context)

**Angular Remote**: Requires remount

```typescript
// In useModuleFederationRemote hook
useEffect(() => {
  if (unmountRef.current) {
    unmountRef.current(); // Unmount old
  }

  const unmount = await remote.default(container, theme);
  unmountRef.current = unmount; // Mount with new theme
}, [theme]); // Re-run when theme changes
```

### **Angular Component with Theme**

**AppComponent** (`remotes/angular-webpack/src/components/app/app.component.ts`):

```typescript
export class AppComponent implements OnInit {
  @Input() initialTheme: ThemeMode = "light";
  themeMode: ThemeMode = "light";

  ngOnInit() {
    this.themeMode = this.initialTheme;
    this.themeService.setTheme(this.initialTheme);

    this.themeService.theme$.subscribe((theme) => {
      this.themeMode = theme;
    });
  }
}
```

**Template** (`app.component.html`):

```html
<div [class]="'app-container ' + themeMode">
  <!-- Content styled based on themeMode -->
</div>
```

**Styles** (`app.component.css`):

```css
.app-container.light {
  background-color: #f5f5f5;
  color: #212121;
}

.app-container.dark {
  background-color: #121212;
  color: #ffffff;
}
```

---

## 🗄️ Store Integration

### **Shared Dependencies**

Module Federation enables **singleton sharing** of state management libraries:

**Host Config**:

```typescript
shared: {
  react: { singleton: true },         // Only one React instance
  "react-dom": { singleton: true },
  "@mui/material": { singleton: true },
  zustand: { singleton: true },       // Shared Zustand library
}
```

**Products Remote Config** (React/Vite):

```typescript
shared: ["react", "react-dom", "@mui/material", "zustand"];
// Uses host's versions (singleton)
```

**Angular Remote Config** (Webpack):

```typescript
shared: shareAll({
  singleton: true, // All Angular packages as singletons
  strictVersion: true,
});
```

### **Separate Store Instances**

Even though the **library** is shared, each app has its **own store instance**.

**Host Store** (`host/src/store/cartStore.ts`):

```typescript
import { create } from "zustand"; // Shared library from host

export const useCartStore = create((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
}));

// Used in host only
```

**Products Remote Store** (`remotes/products/src/store/productStore.ts`):

```typescript
import { create } from "zustand"; // Same library, different instance!

export const useProductStore = create(
  persist(
    (set) => ({
      cart: [],
      addToCart: (product) =>
        set((state) => ({ cart: [...state.cart, product] })),
    }),
    {
      name: "products-cart-storage", // Remote-specific localStorage key
    }
  )
);

// Used in Products remote only
```

**Angular Remote Store** (`remotes/angular-webpack/src/services/data.service.ts`):

```typescript
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: "root" })
export class DataService {
  private dataSubject = new BehaviorSubject({ total: 0, active: 0 });
  data$ = this.dataSubject.asObservable();

  loadData() {
    // Load and update data
    const data = JSON.parse(localStorage.getItem("angular-data") || "{}");
    this.dataSubject.next(data);
  }
}

// Used in Angular remote only
```

### **Key Points**:

- ✅ **Library is shared** (single copy of Zustand, React, Angular)
- ✅ **Store instances are separate** (no shared state)
- ✅ Each remote manages its own data
- ✅ localStorage keys are scoped to prevent conflicts
- ✅ Reduces bundle size (shared dependencies loaded once)

---

## 🚀 Running the Application

### **Development Workflow**:

```powershell
# 1. Install dependencies (first time only)
.\scripts\utils-install-all.ps1

# 2. Build all remotes + start in watch mode
.\scripts\mf-start-watch.ps1

# 3. Build all remotes + start in preview mode
.\scripts\mf-start-preview.ps1

# 4. Quick start (if already built)
.\scripts\mf-start-quick.ps1
```

### **Important: Dev Mode Limitation**

⚠️ **Vite's Module Federation plugin does NOT work reliably in dev mode** (`npm run dev`).

**Why?**

- `@originjs/vite-plugin-federation` doesn't generate proper `remoteEntry.js` in dev mode
- The endpoint returns HTML instead of JavaScript

**Solution:**

- Use **watch mode** (`mf-start-watch.ps1`) for development
  - Auto-rebuilds on file changes
  - Serves production builds via preview server
- Or use **preview mode** (`mf-start-preview.ps1`)
  - Builds once, then serves

---

## 📊 Data Flow Diagram

### **React Remote (Products) - Direct Import**

```
┌─────────────────────────────────────────────────────────────┐
│ Host (http://localhost:5000)                                │
│                                                              │
│  ┌────────────────────────────────────────┐                │
│  │  const RemoteProducts = lazy(() =>     │                │
│  │    import("productsApp/ProductsPage")  │                │
│  │  );                                     │                │
│  └────────┬───────────────────────────────┘                │
│           │                                                  │
│           │ HTTP Request                                     │
│           ▼                                                  │
└───────────┼──────────────────────────────────────────────────┘
            │
            │ GET http://localhost:5001/assets/remoteEntry.js
            │
            ▼
┌─────────────────────────────────────────────────────────────┐
│ Products Remote (http://localhost:5001)                     │
│                                                              │
│  ┌──────────────────────────────────┐                       │
│  │  remoteEntry.js                  │                       │
│  │  - Exposes: ProductsPage         │                       │
│  │  - Resolves shared dependencies: │                       │
│  │    * react (from host)           │                       │
│  │    * react-dom (from host)       │                       │
│  │    * @mui/material (from host)   │                       │
│  │    * zustand (from host)         │                       │
│  └────────┬─────────────────────────┘                       │
│           │                                                  │
│           ▼                                                  │
│  ┌────────────────────────────────┐                         │
│  │  ProductsPage Component        │                         │
│  │  (Standard React Component)    │                         │
│  └────────┬───────────────────────┘                         │
│           │                                                  │
│           ▼                                                  │
│  ┌─────────────────┐      ┌─────────────────┐             │
│  │  ProductStore   │      │  MUI Theme      │             │
│  │  (Zustand)      │      │  (from Host's   │             │
│  │  cart: []       │      │  ThemeProvider) │             │
│  └─────────────────┘      └─────────────────┘             │
└─────────────────────────────────────────────────────────────┘
            │
            │ Return React Component
            │
            ▼
┌─────────────────────────────────────────────────────────────┐
│ Host React Tree                                              │
│                                                              │
│  <ThemeProvider theme={theme}>                              │
│    <Routes>                                                  │
│      <Route path="/products">                               │
│        <Suspense fallback={<Loading />}>                    │
│          <RemoteProducts />  ← Rendered in React tree       │
│        </Suspense>                                           │
│      </Route>                                                │
│    </Routes>                                                 │
│  </ThemeProvider>                                            │
│                                                              │
│  ✅ Automatic theme inheritance via Context                 │
│  ✅ Automatic cleanup via React lifecycle                   │
└─────────────────────────────────────────────────────────────┘
```

### **Angular Remote (Webpack) - Mount Function**

```
┌─────────────────────────────────────────────────────────────┐
│ Host (http://localhost:5000)                                │
│                                                              │
│  ┌──────────────────┐                                       │
│  │  ThemeStore      │                                       │
│  │  mode: "dark"    │                                       │
│  └────────┬─────────┘                                       │
│           │                                                  │
│           ▼                                                  │
│  ┌────────────────────────────────────────┐                │
│  │  useModuleFederationRemote             │                │
│  │  - Import: angularWebpack/App          │                │
│  │  - Mount: (container, "dark")          │                │
│  └────────┬───────────────────────────────┘                │
│           │                                                  │
│           │ HTTP Request                                     │
│           ▼                                                  │
└───────────┼──────────────────────────────────────────────────┘
            │
            │ GET http://localhost:5004/assets/remoteEntry.js
            │
            ▼
┌─────────────────────────────────────────────────────────────┐
│ Angular Remote (http://localhost:5004)                      │
│                                                              │
│  ┌──────────────────────────────────┐                       │
│  │  remoteEntry.js                  │                       │
│  │  - Exposes: ./App                │                       │
│  │  - Resolves shared Angular deps  │                       │
│  └────────┬─────────────────────────┘                       │
│           │                                                  │
│           ▼                                                  │
│  ┌────────────────────────────────┐                         │
│  │  angular-remote.ts             │                         │
│  │  export default async mount()  │                         │
│  └────────┬───────────────────────┘                         │
│           │                                                  │
│           ▼ Dynamic import (async boundary)                 │
│  ┌────────────────────────────────┐                         │
│  │  bootstrap-mf.ts               │                         │
│  │  1. import 'zone.js'           │                         │
│  │  2. createApplication()        │                         │
│  │  3. createComponent(AppComp)   │                         │
│  │  4. Set initialTheme="dark"    │                         │
│  │  5. Attach to DOM              │                         │
│  │  6. Return unmount function    │                         │
│  └────────┬───────────────────────┘                         │
│           │                                                  │
│           ▼                                                  │
│  ┌─────────────────┐      ┌─────────────────┐             │
│  │  ThemeService   │      │  AppComponent   │             │
│  │  (RxJS)         │─────▶│  Rendered with  │             │
│  │  mode: "dark"   │      │  dark theme     │             │
│  └─────────────────┘      └─────────────────┘             │
└─────────────────────────────────────────────────────────────┘
            │
            │ Return unmount function
            │
            ▼
┌─────────────────────────────────────────────────────────────┐
│ Host DOM                                                     │
│                                                              │
│  <Box sx={{ p: 3 }}>                                        │
│    <div id="angular-webpack-container">                     │
│      <div id="angular-webpack-123456">                      │
│        <!-- Angular AppComponent rendered here -->          │
│      </div>                                                  │
│    </div>                                                    │
│  </Box>                                                      │
│                                                              │
│  unmountRef.current = unmountFunction                       │
│  ✅ Manual cleanup on theme change or unmount               │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔄 Theme Change Flow

### **React Remote (Products) - Automatic**

```
1. User clicks theme toggle in header
   ↓
2. Host's ThemeStore updates: mode = "dark"
   ↓
3. Host's ThemeProvider updates theme object
   ↓
4. React Context propagates new theme
   ↓
5. Products remote receives new theme via useTheme()
   ↓
6. React automatically re-renders with new theme
   ✅ No remounting needed
   ✅ State preserved
```

### **Angular Remote (Webpack) - Manual Remount**

```
1. User clicks theme toggle in header
   ↓
2. Host's ThemeStore updates: mode = "dark"
   ↓
3. useModuleFederationRemote hook detects theme change (useEffect dependency)
   ↓
4. Calls unmountRef.current()
   → Destroys Angular app
   → Removes DOM elements
   ↓
5. Calls remote.mount(container, "dark")
   → Bootstraps new Angular app
   → Sets initialTheme="dark"
   ↓
6. ThemeService.setTheme("dark")
   ↓
7. Angular app re-renders with dark theme
   ⚠️ State is reset (app remounted)
```

---

## ✅ Key Benefits

1. **Runtime Integration**: Remotes loaded at runtime, not build time
2. **Shared Dependencies**: Single instance of React, Zustand, etc.
3. **Framework Agnostic**: Can mix React, Vue, Angular remotes
4. **Code Splitting**: Automatic chunk optimization
5. **Independent Deployment**: Each remote can deploy separately
6. **Type Safety**: TypeScript declarations for remote modules
7. **Lazy Loading**: Remotes only load when route is visited

---

## 🔍 Debugging

**Check if remote is accessible**:

```bash
# Products (Vite)
curl http://localhost:5001/assets/remoteEntry.js

# Angular Webpack
curl http://localhost:5004/assets/remoteEntry.js

# Should return JavaScript, not HTML
```

**Check Module Federation in DevTools**:

```javascript
// In browser console

// Check if remote loaded
console.log(window.productsApp); // Should show remote scope

// Check network tab for:
// - remoteEntry.js (200 OK, content-type: application/javascript)
// - ProductsPage-abc123.js (200 OK)
```

**Check React remote rendering**:

```javascript
// Products should be in React tree
document.querySelector('[data-testid="products-page"]');
```

**Check Angular remote rendering**:

```javascript
// Angular should be in separate container
document.querySelector("#angular-webpack-container > div");
```

**Common Errors**:

**Error**: `Failed to fetch dynamically imported module`

- **Cause**: Remote server not running
- **Fix**: Check if remote is running on correct port
  ```bash
  # Products should be on 5001
  curl http://localhost:5001
  # Angular Webpack should be on 5004
  curl http://localhost:5004
  ```

**Error**: `Shared module is not available for eager consumption`

- **Cause**: Missing `build.modulePreload: false` in Vite remote
- **Fix**: Add to remote's `vite.config.ts`:
  ```typescript
  build: {
    modulePreload: false,
    target: "esnext",
  }
  ```

**Error**: `zone.js is not defined` (Angular)

- **Cause**: Angular code executing before zone.js loads
- **Fix**: Use async boundary pattern
  ```typescript
  // angular-remote.ts
  export default async function mount(...) {
    const { bootstrap } = await import("./bootstrap-mf");
    return bootstrap(...);
  }
  ```

**Error**: `remoteEntry.js returns HTML instead of JavaScript`

- **Cause**: Vite dev mode doesn't support Module Federation properly
- **Fix**: Use watch mode or preview mode, NOT dev mode
  ```powershell
  # Use this:
  .\scripts\mf-start-watch.ps1
  # NOT this:
  .\scripts\mf-start-dev.ps1  # Deleted for this reason
  ```

**Error**: `Cannot read properties of undefined (reading 'useTheme')`

- **Cause**: MUI not properly shared between host and remote
- **Fix**: Ensure @mui/material is in shared config:
  ```typescript
  shared: {
    "@mui/material": { singleton: true },
  }
  ```

---

## 🌐 API Integration

### **Passing API Base Path from Host to Remote**

Remotes receive the API base path from the host to make async API calls.

#### **React Remote (Products) - Via Props**

**API Service** (`remotes/products/src/services/apiService.ts`):

```typescript
export class ProductApiService {
  private basePath: string;

  constructor(basePath?: string) {
    // Auto-resolve: if no basePath provided, use same origin
    this.basePath = basePath || window.location.origin;
  }

  async fetchProducts(): Promise<ProductApiData[]> {
    console.log(`[Products] Fetching from: ${this.basePath}/api/products`);
    // Simulate API call with Promise
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockProducts), 800);
    });
  }
}
```

**Component Usage** (`remotes/products/src/ProductsPage.tsx`):

```typescript
interface ProductsPageProps {
  apiBasePath?: string;
}

export default function ProductsPage({ apiBasePath }: ProductsPageProps = {}) {
  const [products, setProducts] = useState<ProductApiData[]>([]);

  useEffect(() => {
    const apiService = new ProductApiService(apiBasePath);
    apiService.fetchProducts().then(setProducts);
  }, [apiBasePath]);

  return (
    <Container>
      <Chip label={`API: ${apiService?.getBasePath()}`} />
      {/* Products grid */}
    </Container>
  );
}
```

#### **Angular Remote (Webpack) - Via Mount Options**

**API Service** (`remotes/angular-webpack/src/services/api.service.ts`):

```typescript
@Injectable({ providedIn: "root" })
export class ApiService {
  private basePath: string;

  setBasePath(basePath?: string): void {
    this.basePath = basePath || window.location.origin;
    console.log(`[Angular] API base path: ${this.basePath}`);
  }

  fetchAnalytics(): Observable<AnalyticsData> {
    console.log(`[Angular] Fetching from: ${this.basePath}/api/analytics`);
    // Simulate API call with RxJS
    return of(mockData).pipe(delay(1000));
  }
}
```

**Bootstrap** (`remotes/angular-webpack/src/bootstrap-mf.ts`):

```typescript
export interface MountOptions {
  theme?: ThemeMode;
  apiBasePath?: string;
}

export async function bootstrapAngularComponent(
  container: HTMLElement,
  options: MountOptions = {}
) {
  const { theme = 'light', apiBasePath } = options;

  const appRef = await createApplication({ providers: [] });
  const componentRef = createComponent(AppComponent, { ... });

  // Set API base path
  const apiService = componentRef.injector.get(ApiService);
  apiService.setBasePath(apiBasePath);

  return unmountFn;
}
```

**Remote Entry** (`remotes/angular-webpack/src/angular-remote.ts`):

```typescript
export default async function mount(
  container: HTMLElement,
  themeOrOptions?: ThemeMode | MountOptions
): Promise<() => void> {
  // Support both old (theme string) and new (options object) signatures
  let options: MountOptions;

  if (typeof themeOrOptions === "string") {
    options = { theme: themeOrOptions };
  } else {
    options = themeOrOptions || { theme: "light" };
  }

  const { bootstrapAngularComponent } = await import("./bootstrap-mf");
  return await bootstrapAngularComponent(container, options);
}
```

#### **Host Configuration**

**Hook Update** (`host/src/hooks/useModuleFederationRemote.ts`):

```typescript
export function useModuleFederationRemote(
  importRemote: () => Promise<RemoteModule>,
  remoteName: string,
  port: number,
  theme: string,
  apiBasePath?: string // NEW PARAMETER
) {
  useEffect(() => {
    const options: RemoteMountOptions = {
      theme,
      apiBasePath: apiBasePath || window.location.origin, // Auto-resolve
    };

    const { default: mountRemote } = await importRemote();
    cleanupRef.current = await mountRemote(containerRef.current, options);
  }, [theme, apiBasePath]);

  return { containerRef, error };
}
```

**Page Usage** (`host/src/pages/AngularWebpackPage.tsx`):

```typescript
const AngularWebpackPage = () => {
  const { mode } = useThemeStore();
  const apiBasePath =
    import.meta.env.VITE_API_BASE_PATH || window.location.origin;

  const { containerRef, error } = useModuleFederationRemote(
    () => import("angularWebpack/App"),
    "Angular Webpack",
    5004,
    mode,
    apiBasePath // Pass API base path
  );

  return <Box ref={containerRef} />;
};
```

### **Auto-Resolution**

If no `apiBasePath` is provided, it defaults to same origin:

```typescript
const basePath = apiBasePath || window.location.origin;
```

**This allows remotes to automatically use the host's domain for API calls.**

**Example scenarios:**

1. **Same origin**: Host at `https://app.example.com` → Remote uses `https://app.example.com/api/products`
2. **Custom API**: Pass `https://api.example.com` → Remote uses `https://api.example.com/api/products`
3. **Development**: Host at `http://localhost:5000` → Remote uses `http://localhost:5000/api/products`

---

## 📚 Related Files

**Host**:

- `host/vite.config.ts` - MF configuration with remotes
- `host/src/remotes.d.ts` - TypeScript declarations for remotes
- `host/src/hooks/useModuleFederationRemote.ts` - Custom hook for cross-framework remotes
- `host/src/components/RemoteErrorFallback.tsx` - Error UI component
- `host/src/pages/ProductsPage.tsx` - React remote (direct import)
- `host/src/pages/AngularWebpackPage.tsx` - Angular remote (mount function)

**React Remote (Products)**:

- `remotes/products/.config/module-federation/federation.config.ts` - Expose config
- `remotes/products/src/ProductsPage.tsx` - Exposed component
- `remotes/products/src/store/productStore.ts` - Zustand store
- `remotes/products/vite.config.ts` - Vite + MF plugin

**Angular Remote (Webpack)**:

- `remotes/angular-webpack/.config/module-federation/module-federation.config.js` - Webpack MF config
- `remotes/angular-webpack/src/angular-remote.ts` - Exposed entry (async boundary)
- `remotes/angular-webpack/src/bootstrap-mf.ts` - Bootstrap logic
- `remotes/angular-webpack/src/components/app/app.component.ts` - Main component
- `remotes/angular-webpack/src/services/theme.service.ts` - Theme management
- `remotes/angular-webpack/webpack.config.js` - Main Webpack config

**Scripts**:

- `scripts/mf-*.ps1` - Module Federation scripts
- `scripts/README-MODULE-FEDERATION.md` - Detailed script documentation

---

## 📖 Further Reading

- [Webpack Module Federation](https://webpack.js.org/concepts/module-federation/)
- [Vite Plugin Federation](https://github.com/originjs/vite-plugin-federation)
- [Angular Architects MF](https://www.npmjs.com/package/@angular-architects/module-federation)

# Web Component Integration Flow

This document explains how remotes are integrated as Web Components in this micro-frontend architecture.

---

## 📋 Overview

```
Remote → Build Single JS File → Copy to Host → On-Demand Import → Render
```

---

## 🔄 Complete Flow

### **1. Remote: Build Web Component**

Each remote builds into a **single JavaScript file** containing the entire component.

#### **Example 1: React Remote (Products)**

**Build Configuration** (`remotes/products/.config/webcomponent/webcomponent.config.ts`):

```typescript
export const webComponentConfig = {
  lib: {
    entry: "./src/webcomponent.tsx",
    name: "ProductsWidget",
    fileName: "products-widget",
    formats: ["umd", "es"] as const,
  },
  rollupOptions: {
    output: {
      assetFileNames: "assets/[name][extname]",
      entryFileNames: "[name].js",
    },
  },
  outDir: "dist-webcomponent",
};
```

**Entry Point** (`remotes/products/src/webcomponent.tsx`):

```typescript
class ProductsWebComponent extends HTMLElement {
  private root: ReactDOM.Root | null = null;
  private themeMode: ThemeMode = "light";

  static get observedAttributes() {
    return ["theme"];
  }

  connectedCallback() {
    this.mount();
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === "theme" && oldValue !== newValue) {
      this.themeMode = getThemeMode(newValue);
      this.mount(); // Re-mount with new theme
    }
  }

  private mount() {
    const theme = createWebComponentTheme(this.themeMode);
    this.root = ReactDOM.createRoot(this);
    this.root.render(
      <ThemeProvider theme={theme}>
        <ProductsPage />
      </ThemeProvider>
    );
  }
}

customElements.define("products-widget", ProductsWebComponent);
```

**Build Output**:

```
remotes/products/dist-webcomponent/
  └── products-widget.js  (single file)
```

#### **Example 2: Angular Remote (Webpack)**

**Webpack Configuration** (`remotes/angular-webpack/.config/webcomponent/webpack.webcomponent.config.js`):

```javascript
module.exports = {
  optimization: {
    splitChunks: false, // Force single file
    runtimeChunk: false,
  },
  output: {
    filename: "angular-webpack-widget.js",
  },
};
```

**Entry Point** (`remotes/angular-webpack/src/main.webcomponent.ts`):

```typescript
// Placeholder element for synchronous registration
class AngularWebpackElement extends HTMLElement {
  connectedCallback() {
    // Bootstrap Angular asynchronously
    createApplication({ providers: [] })
      .then((appRef) => {
        const injector = appRef.injector;
        const WebComponentClass = createCustomElement(AppComponent, {
          injector,
        });

        // Create internal Angular element
        const angularElement = document.createElement(
          `angular-webpack-internal-${Date.now()}`
        );

        // Copy attributes (including theme)
        for (let i = 0; i < this.attributes.length; i++) {
          angularElement.setAttribute(
            this.attributes[i].name,
            this.attributes[i].value
          );
        }

        this.appendChild(angularElement);
      })
      .catch((err) => {
        this.innerHTML = `<div>Error: ${err.message}</div>`;
      });
  }
}

customElements.define("angular-webpack-widget", AngularWebpackElement);
```

**Build Output**:

```
remotes/angular-webpack/dist-webcomponent/
  └── angular-webpack-widget.js  (single file)
```

---

### **2. Copy to Central Location**

**Script** (`scripts/wc-copy-widgets.ps1`):

```powershell
# Copy from remote's dist-webcomponent to central widgets/
Copy-Item "remotes/products/dist-webcomponent/products-widget.js" "widgets/products-widget.js"
Copy-Item "remotes/angular-webpack/dist-webcomponent/angular-webpack-widget.js" "widgets/angular-webpack-widget.js"

# Copy to host's public directory
Copy-Item "widgets/*" "host-webcomponent/public/widgets/"
```

**Result**:

```
widgets/
  ├── products-widget.js
  ├── angular-webpack-widget.js
  ├── angular-vite-widget.js
  ├── shell-widget.js
  ├── contact-widget.js
  └── vue-widget.js

host-webcomponent/public/widgets/
  └── (same files)
```

---

### **3. Host: On-Demand Loading**

**Load Utility** (`host-webcomponent/src/utils/loadWebComponents.ts`):

```typescript
const loadedWidgets = new Set<string>();
const loadingPromises = new Map<string, Promise<void>>();

export const loadWebComponent = async (widgetName: string): Promise<void> => {
  // Check if already loaded
  if (loadedWidgets.has(widgetName)) return;

  // Check if currently loading (prevent duplicate requests)
  if (loadingPromises.has(widgetName)) {
    return loadingPromises.get(widgetName)!;
  }

  // Load the script
  const promise = new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `/widgets/${widgetName}.js`;
    script.onload = () => {
      loadedWidgets.add(widgetName);
      resolve();
    };
    script.onerror = () => reject(new Error(`Failed to load ${widgetName}`));
    document.head.appendChild(script);
  });

  loadingPromises.set(widgetName, promise);
  return promise;
};
```

---

### **4. Host: Custom Hook for Pages**

**Hook** (`host-webcomponent/src/hooks/useWebComponent.ts`):

```typescript
export const useWebComponent = (widgetName: string) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const theme = useThemeStore((state) => state.mode);
  const widgetRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Load widget on mount
    loadWebComponent(widgetName)
      .then(() => setLoading(false))
      .catch((err) => setError(err));
  }, [widgetName]);

  useEffect(() => {
    // Update theme when it changes
    if (widgetRef.current) {
      widgetRef.current.setAttribute("theme", theme);
    }
  }, [theme]);

  return { loading, error, widgetRef, theme };
};
```

---

### **5. Host: Render in Page**

**Page Component** (`host-webcomponent/src/pages/ProductsPage.tsx`):

```typescript
export const ProductsPage = () => {
  const { loading, error, widgetRef, theme } = useWebComponent(
    "products-widget"
  );

  if (loading) return <WebComponentLoader />;
  if (error) return <WebComponentLoader error={error} />;

  return <products-widget ref={widgetRef} theme={theme} />;
};
```

**HTML Output**:

```html
<products-widget theme="dark">
  <div>
    <!-- React app with Material-UI ProductsPage -->
  </div>
</products-widget>
```

---

## 🎨 Theme Integration

### **Host → Remote (Attribute)**

**Host sets theme attribute**:

```typescript
<products-widget theme="dark" />
```

#### **React Remote (Products)**

```typescript
class ProductsWebComponent extends HTMLElement {
  static get observedAttributes() {
    return ["theme"];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === "theme" && oldValue !== newValue) {
      this.themeMode = getThemeMode(newValue); // "light" | "dark"
      this.mount(); // Re-mount React with new theme
    }
  }

  private mount() {
    const theme = createWebComponentTheme(this.themeMode);
    this.root.render(
      <ThemeProvider theme={theme}>
        <ProductsPage />
      </ThemeProvider>
    );
  }
}
```

#### **Angular Remote (Webpack)**

```typescript
class AngularWebpackElement extends HTMLElement {
  connectedCallback() {
    createApplication({ providers: [] }).then((appRef) => {
      const angularElement = document.createElement("angular-internal");

      // Copy theme attribute
      for (let i = 0; i < this.attributes.length; i++) {
        angularElement.setAttribute(
          this.attributes[i].name,
          this.attributes[i].value
        );
      }

      // AppComponent receives theme via @Input()
      this.appendChild(angularElement);
    });
  }
}
```

**Angular Component** (`remotes/angular-webpack/src/components/app/app.component.ts`):

```typescript
export class AppComponent implements OnInit {
  @Input() initialTheme: ThemeMode = "light";

  ngOnInit() {
    this.themeService.setTheme(this.initialTheme);
  }
}
```

### **Theme Creation** (`remotes/products/src/utils/theme.ts`):

```typescript
export const createWebComponentTheme = (mode: ThemeMode) => {
  return createTheme({
    palette: {
      mode: mode,
      primary: { main: mode === "light" ? "#1976d2" : "#90caf9" },
      background: {
        default: mode === "light" ? "#f5f5f5" : "#121212",
        paper: mode === "light" ? "#ffffff" : "#1e1e1e",
      },
    },
  });
};
```

---

## 🗄️ Store Integration

### **React Remote Store** (`remotes/products/src/store/productStore.ts`):

```typescript
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ProductStore {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
}

export const useProductStore = create<ProductStore>()(
  persist(
    (set) => ({
      cart: [],
      addToCart: (product) =>
        set((state) => ({ cart: [...state.cart, product] })),
      removeFromCart: (productId) =>
        set((state) => ({
          cart: state.cart.filter((p) => p.id !== productId),
        })),
    }),
    {
      name: "wc-products-storage", // Web component-specific key
    }
  )
);
```

### **Angular Remote Store** (`remotes/angular-webpack/src/services/theme.service.ts`):

```typescript
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: "root" })
export class ThemeService {
  private themeSubject = new BehaviorSubject<ThemeMode>("light");
  theme$ = this.themeSubject.asObservable();

  setTheme(mode: ThemeMode) {
    this.themeSubject.next(mode);
    // Persist to localStorage
    localStorage.setItem("wc-angular-theme", mode);
  }

  // Hydrate from localStorage
  constructor() {
    const saved = localStorage.getItem("wc-angular-theme") as ThemeMode;
    if (saved) this.themeSubject.next(saved);
  }
}
```

### **Host Store** (`host-webcomponent/src/store/themeStore.ts`):

```typescript
export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      mode: "light",
      toggleTheme: () =>
        set((state) => ({
          mode: state.mode === "light" ? "dark" : "light",
        })),
    }),
    {
      name: "host-theme-storage", // Separate storage key
    }
  )
);
```

**Key Points**:

- ✅ Each remote has its **own isolated store**
- ✅ Theme is **passed via attribute** from host to remote
- ✅ Remote persists its own state to **scoped localStorage keys**
- ✅ No shared state between host and remotes

---

## 🚀 Running the Application

### **Development Workflow**:

```powershell
# 1. Install dependencies (first time only)
.\scripts\utils-install-all.ps1

# 2. Build all web components + start host
.\scripts\wc-start.ps1

# 3. Quick start (if already built)
.\scripts\wc-start-quick.ps1
```

### **What Happens**:

1. **Build Phase** (`wc-build-all.ps1`):

   - All remotes build in parallel → single JS files

2. **Copy Phase** (`wc-copy-widgets.ps1`):

   - Copy all widgets to `widgets/` and `host-webcomponent/public/widgets/`

3. **Runtime**:
   - Host starts on `http://localhost:5010`
   - User navigates to `/vue`
   - `useWebComponent` hook loads `vue-widget.js` on demand
   - `<vue-widget theme="dark">` renders with current theme
   - User toggles theme → attribute updates → remote re-renders

---

## 📊 Data Flow Diagram

### **React Remote (Products)**

```
┌─────────────────────────────────────────────────────────────┐
│ Host (http://localhost:5010)                                │
│                                                              │
│  ┌──────────────────┐      ┌──────────────────────┐        │
│  │  ThemeStore      │─────▶│  <products-widget>   │        │
│  │  mode: "dark"    │      │  theme="dark"        │        │
│  └──────────────────┘      └────────┬─────────────┘        │
│                                      │                       │
│                                      ▼                       │
│                            ┌─────────────────────┐          │
│                            │ /widgets/           │          │
│                            │  products-widget.js │          │
│                            │  (loaded on demand) │          │
│                            └─────────────────────┘          │
└─────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────┐
│ Remote (React Web Component)                                │
│                                                              │
│  observedAttributes: ["theme"]                              │
│                                                              │
│  attributeChangedCallback(theme="dark")                     │
│         │                                                    │
│         ▼                                                    │
│  ┌──────────────────────────────────┐                       │
│  │ createWebComponentTheme("dark")  │                       │
│  │ → MUI Theme Object               │                       │
│  └────────────┬─────────────────────┘                       │
│               │                                              │
│               ▼                                              │
│  ┌────────────────────────────────┐                         │
│  │ ReactDOM.createRoot()          │                         │
│  │ <ThemeProvider theme={theme}>  │                         │
│  │   <ProductsPage />             │                         │
│  │ </ThemeProvider>               │                         │
│  └────────────────────────────────┘                         │
│               │                                              │
│               ▼                                              │
│  ┌─────────────────┐      ┌──────────────────┐            │
│  │  ProductStore   │      │  React App       │            │
│  │  (Zustand)      │─────▶│  Rendered with   │            │
│  │  cart: []       │      │  dark theme      │            │
│  └─────────────────┘      └──────────────────┘            │
└─────────────────────────────────────────────────────────────┘
```

### **Angular Remote (Webpack)**

```
┌─────────────────────────────────────────────────────────────┐
│ Host (http://localhost:5010)                                │
│                                                              │
│  ┌──────────────────┐      ┌──────────────────────────┐    │
│  │  ThemeStore      │─────▶│ <angular-webpack-widget> │    │
│  │  mode: "dark"    │      │  theme="dark"            │    │
│  └──────────────────┘      └────────┬─────────────────┘    │
│                                      │                       │
│                                      ▼                       │
│                      ┌──────────────────────────────┐       │
│                      │ /widgets/                    │       │
│                      │  angular-webpack-widget.js   │       │
│                      │  (loaded on demand)          │       │
│                      └──────────────────────────────┘       │
└─────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────┐
│ Remote (Angular Web Component)                              │
│                                                              │
│  connectedCallback()                                        │
│         │                                                    │
│         ▼                                                    │
│  ┌──────────────────────────────────┐                       │
│  │ createApplication()              │                       │
│  │ (Async Angular bootstrap)        │                       │
│  └────────────┬─────────────────────┘                       │
│               │                                              │
│               ▼                                              │
│  ┌────────────────────────────────┐                         │
│  │ createCustomElement()          │                         │
│  │ (AppComponent)                 │                         │
│  └────────────┬───────────────────┘                         │
│               │                                              │
│               ▼                                              │
│  ┌────────────────────────────────┐                         │
│  │ Copy attributes (theme="dark") │                         │
│  │ to internal Angular element    │                         │
│  └────────────┬───────────────────┘                         │
│               │                                              │
│               ▼                                              │
│  ┌─────────────────┐      ┌──────────────────┐            │
│  │  ThemeService   │      │  Angular App     │            │
│  │  (RxJS)         │─────▶│  AppComponent    │            │
│  │  mode: "dark"   │      │  with dark theme │            │
│  └─────────────────┘      └──────────────────┘            │
└─────────────────────────────────────────────────────────────┘
```

---

## ✅ Key Benefits

1. **True Isolation**: Each remote is a standalone JavaScript file
2. **Framework Agnostic**: Host doesn't need to know about Vue/Angular/React
3. **On-Demand Loading**: Widgets only load when needed (performance)
4. **Single File**: No complex dependency management
5. **Standard Web API**: Uses native Custom Elements API
6. **Theme Sync**: Automatic theme propagation via attributes
7. **Independent Stores**: Each remote manages its own state

---

## 🔍 Debugging

**Check if widget is loaded**:

```javascript
// In browser console
console.log(customElements.get("products-widget")); // Should show class definition
console.log(customElements.get("angular-webpack-widget")); // Should show class definition
```

**Check if script is present**:

```javascript
// Check DOM
document.querySelector('script[src="/widgets/products-widget.js"]');
document.querySelector('script[src="/widgets/angular-webpack-widget.js"]');
```

**Check theme attribute**:

```javascript
// Check element
document.querySelector("products-widget").getAttribute("theme"); // "light" | "dark"
document.querySelector("angular-webpack-widget").getAttribute("theme");
```

**Check React rendering (Products)**:

```javascript
// In browser console
document.querySelector("products-widget > div"); // Should have React content
```

**Check Angular rendering (Webpack)**:

```javascript
// In browser console
document.querySelector("angular-webpack-widget > angular-webpack-internal-*");
```

---

## 🌐 API Integration

### **Passing API Base Path via Attribute**

Web components receive the API base path as an HTML attribute.

#### **React Remote (Products)**

**Web Component** (`remotes/products/src/webcomponent.tsx`):

```typescript
class ProductsWebComponent extends HTMLElement {
  private apiBasePath: string = window.location.origin; // Default

  static get observedAttributes() {
    return ["theme", "api-base-path"]; // Add api-base-path attribute
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === "theme" && oldValue !== newValue) {
      this.themeMode = getThemeMode(newValue);
      this.mount();
    } else if (name === "api-base-path" && oldValue !== newValue) {
      this.apiBasePath = newValue || window.location.origin;
      this.mount(); // Re-mount with new API path
    }
  }

  private mount() {
    this.root.render(
      <ThemeProvider theme={theme}>
        <ProductsPage apiBasePath={this.apiBasePath} />
      </ThemeProvider>
    );
  }
}
```

**Component Usage** (`remotes/products/src/ProductsPage.tsx`):

```typescript
export default function ProductsPage({
  apiBasePath,
}: {
  apiBasePath?: string;
}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const apiService = new ProductApiService(apiBasePath);
    apiService.fetchProducts().then(setProducts);
  }, [apiBasePath]);

  return <Container>{/* Products grid */}</Container>;
}
```

#### **Angular Remote (Webpack)**

**Web Component** (`remotes/angular-webpack/src/main.webcomponent.ts`):

```typescript
class AngularWebpackElement extends HTMLElement {
  connectedCallback() {
    const apiBasePath =
      this.getAttribute("api-base-path") || window.location.origin;

    createApplication({ providers: [] }).then((appRef) => {
      const injector = appRef.injector;

      // Set API base path
      const apiService = injector.get(ApiService);
      apiService.setBasePath(apiBasePath);

      const WebComponentClass = createCustomElement(AppComponent, { injector });
      // ... create and append element

      console.log(`API base path: ${apiBasePath}`);
    });
  }
}
```

**API Service** (`remotes/angular-webpack/src/services/api.service.ts`):

```typescript
@Injectable({ providedIn: "root" })
export class ApiService {
  private basePath: string;

  setBasePath(basePath?: string): void {
    this.basePath = basePath || window.location.origin;
  }

  fetchAnalytics(): Observable<AnalyticsData> {
    console.log(`Fetching from: ${this.basePath}/api/analytics`);
    return of(mockData).pipe(delay(1000));
  }
}
```

#### **Host Usage**

**Page Component** (`host-webcomponent/src/pages/ProductsPage.tsx`):

```typescript
export const ProductsPage = () => {
  const { mode } = useThemeStore();
  const apiBasePath = window.location.origin; // Or from config

  return (
    <WebComponentLoader loading={loading} error={error}>
      <Box>
        <products-widget theme={mode} api-base-path={apiBasePath} />
      </Box>
    </WebComponentLoader>
  );
};
```

**HTML Output**:

```html
<products-widget theme="dark" api-base-path="https://api.example.com">
  <!-- React app renders here -->
</products-widget>
```

### **Auto-Resolution**

If no `api-base-path` attribute is provided:

```typescript
const basePath = this.getAttribute("api-base-path") || window.location.origin;
```

**Example scenarios:**

1. **Same origin**: Host at `https://app.example.com`

   - No attribute → Auto-resolves to `https://app.example.com`
   - API calls: `https://app.example.com/api/products`

2. **Custom API**: Pass explicit attribute

   ```html
   <products-widget api-base-path="https://api.example.com" />
   ```

   - API calls: `https://api.example.com/api/products`

3. **Development**: Host at `http://localhost:5010`
   - No attribute → Auto-resolves to `http://localhost:5010`
   - API calls: `http://localhost:5010/api/products`

### **Benefits**

✅ **Flexible deployment**: Different environments can use different API endpoints  
✅ **Auto-resolution**: Works out-of-the-box with same-origin APIs  
✅ **Framework-agnostic**: Standard HTML attribute works for React, Angular, Vue  
✅ **Type-safe**: Mock data during development, real APIs in production

---

## 📚 Related Files

**Host**:

- `host-webcomponent/src/utils/loadWebComponents.ts` - Loading utility
- `host-webcomponent/src/hooks/useWebComponent.ts` - Custom hook
- `host-webcomponent/src/components/WebComponentLoader.tsx` - Loader component

**React Remote (Products)**:

- `remotes/products/src/webcomponent.tsx` - Web component entry
- `remotes/products/.config/webcomponent/webcomponent.config.ts` - Build config
- `remotes/products/src/utils/theme.ts` - Theme creation
- `remotes/products/vite.config.webcomponent.ts` - Vite config

**Angular Remote (Webpack)**:

- `remotes/angular-webpack/src/main.webcomponent.ts` - Web component entry
- `remotes/angular-webpack/.config/webcomponent/webpack.webcomponent.config.js` - Webpack config
- `remotes/angular-webpack/angular.json` - Angular CLI config (build-wc target)
- `remotes/angular-webpack/src/services/theme.service.ts` - Theme service

**Scripts**:

- `scripts/wc-*.ps1` - Web component scripts
- `scripts/README-WEB-COMPONENTS.md` - Detailed script docs

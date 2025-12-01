# Web Component Scripts Guide

Detailed documentation for all Web Component PowerShell scripts.

---

## Overview

Web Components are standalone, framework-agnostic custom elements. Each remote can be built as a web component and integrated into any HTML page or application.

**Key Concept:** Web components are **static JavaScript files** that work anywhere, unlike Module Federation which requires runtime coordination.

---

## Scripts Reference

### Build

#### `wc-build-all.ps1`

Builds all remotes as web components in parallel.

```powershell
.\scripts\wc-build-all.ps1
```

**When to use:** After making code changes to any remote

**What it does:**

- Discovers all remotes using `utils-get-remotes.ps1`
- Runs `npm run build:webcomponent` for each remote in parallel
- Creates `dist-webcomponent/` folder for each remote
- Each remote builds to a **single JavaScript file** (IIFE format)

**Duration:** ~30-40 seconds (parallel execution)

**Output:**

```
Building all web components...

Found 6 remotes:
  - angular-vite
  - angular-webpack
  - contact
  - products
  - shell
  - vue

Starting build: angular-vite web component...
Starting build: angular-webpack web component...
Starting build: contact web component...
Starting build: products web component...
Starting build: shell web component...
Starting build: vue web component...

Waiting for all builds to complete...

[OK] angular-vite
[OK] angular-webpack
[OK] contact
[OK] products
[OK] shell
[OK] vue

Web component build completed: 6 widgets in 40.9s
```

**What gets built:**

| Remote          | Output File                        | Size            | Location                                     |
| --------------- | ---------------------------------- | --------------- | -------------------------------------------- |
| shell           | `webcomponent.js`                  | ~386 KB         | `remotes/shell/dist-webcomponent/`           |
| products        | `webcomponent.js`                  | ~497 KB         | `remotes/products/dist-webcomponent/`        |
| contact         | `webcomponent.js`                  | ~490 KB         | `remotes/contact/dist-webcomponent/`         |
| angular-webpack | `angular-webpack-widget.js`        | ~168 KB         | `remotes/angular-webpack/dist-webcomponent/` |
| angular-vite    | `angular-vite-widget.iife.js`      | ~969 KB         | `remotes/angular-vite/dist-webcomponent/`    |
| vue             | `vue-widget.iife.js` + `style.css` | 131 KB + 3.7 KB | `remotes/vue/dist-webcomponent/`             |

---

### Copy

#### `wc-copy-widgets.ps1`

Copies built web components to central widgets directory and host public folder.

```powershell
.\scripts\wc-copy-widgets.ps1
```

**Prerequisites:** Web components must be built first (`wc-build-all.ps1`)

**When to use:** After building web components, before starting the host

**What it does:**

1. **Validates** all remotes have `dist-webcomponent/` folders (fails if missing)
2. Copies from `remotes/*/dist-webcomponent/` to `widgets/`
3. Renames files to standard naming convention
4. Copies from `widgets/` to `host-webcomponent/public/widgets/`

**Duration:** ~1 second

**Output:**

```
Copying web components to widgets directory...

[OK] Copied shell-widget.js
[OK] Copied products-widget.js
[OK] Copied contact-widget.js
[OK] Copied angular-webpack-widget.js
[OK] Copied angular-vite-widget.js
[OK] Copied vue-widget.js + style.css

Step 2: Copying to host-webcomponent...
[OK] Copied all widgets to host-webcomponent/public/widgets/

Widget copy complete!
```

**File Mapping:**

| Source                                                                | Destination                         |
| --------------------------------------------------------------------- | ----------------------------------- |
| `remotes/shell/dist-webcomponent/webcomponent.js`                     | `widgets/shell-widget.js`           |
| `remotes/products/dist-webcomponent/webcomponent.js`                  | `widgets/products-widget.js`        |
| `remotes/contact/dist-webcomponent/webcomponent.js`                   | `widgets/contact-widget.js`         |
| `remotes/angular-webpack/dist-webcomponent/angular-webpack-widget.js` | `widgets/angular-webpack-widget.js` |
| `remotes/angular-vite/dist-webcomponent/angular-vite-widget.iife.js`  | `widgets/angular-vite-widget.js`    |
| `remotes/vue/dist-webcomponent/vue-widget.iife.js`                    | `widgets/vue-widget.js`             |
| `remotes/vue/dist-webcomponent/style.css`                             | `widgets/vue-widget.css`            |

**Directory Structure:**

```
widgets/                           # Central source of truth
├── shell-widget.js
├── products-widget.js
├── contact-widget.js
├── angular-webpack-widget.js
├── angular-vite-widget.js
├── vue-widget.js
└── vue-widget.css

host-webcomponent/public/widgets/  # Copy for serving
├── (same files as above)
```

---

### Start Scripts

#### `wc-start.ps1` - Full Workflow

Complete workflow: builds, copies, and starts the web component host.

```powershell
.\scripts\wc-start.ps1
```

**When to use:** First time, or after making code changes

**What it does:**

1. **Builds** all web components (`wc-build-all.ps1`)
2. **Copies** widgets to central directory (`wc-copy-widgets.ps1`)
3. **Starts** `host-webcomponent` on port 5010

**Duration:** ~1 minute total

**Output:**

```
Starting Web Component workflow...

Step 1: Building all web components...
[... build output ...]

Step 2: Copying widgets...
[... copy output ...]

Step 3: Starting host-webcomponent...

Host-webcomponent started on port 5010

Web Component Host: http://localhost:5010

All web components are loaded on demand when you navigate to their pages
```

**What you get:**

- All widgets built and available
- Host running on port 5010
- Widgets load **on-demand** (lazy loading)
- No need to run remotes separately

---

#### `wc-start-quick.ps1` - Quick Start (No Build)

Instantly starts the web component host using existing builds.

```powershell
.\scripts\wc-start-quick.ps1
```

**Prerequisites:**

- Dependencies installed (`utils-install-all.ps1`)
- Web components built (`wc-build-all.ps1`)
- Widgets copied (`wc-copy-widgets.ps1`)

**When to use:** Restarting the host when widgets are already built

**What it does:**

1. **Validates** `host-webcomponent/public/widgets/` exists (fails if missing)
2. **Validates** widget files exist (fails if empty)
3. **Starts** `host-webcomponent` on port 5010

**Duration:** ⚡ Instant (~2 seconds)

**Output:**

```
Quick start - launching web component host...

Starting host-webcomponent on port 5010...

Web Component Host: http://localhost:5010

Web components will load on demand when you navigate to their pages
```

**Advantages:**

- ✅ Fastest way to restart
- ✅ No rebuild needed
- ✅ Perfect for host-only changes

**Disadvantages:**

- ❌ Fails if widgets not built
- ❌ Won't see remote code changes (must rebuild)

---

## Workflow Examples

### First Time Setup

```powershell
# 1. Install dependencies
.\scripts\utils-install-all.ps1

# 2. Build, copy, and start (all in one)
.\scripts\wc-start.ps1
```

**Duration:** ~3-4 minutes total

---

### After Changing Remote Code

```powershell
# Full workflow: rebuild, recopy, restart
.\scripts\wc-start.ps1
```

**Workflow:**

1. Edit code in a remote
2. Run `wc-start.ps1`
3. Wait ~1 minute for build
4. Refresh browser to see changes

---

### After Changing Only Host Code

```powershell
# Just restart host (widgets unchanged)
.\scripts\wc-start-quick.ps1
```

**Workflow:**

1. Edit code in `host-webcomponent`
2. Stop host (Ctrl+C)
3. Run `wc-start-quick.ps1`
4. Refresh browser

---

### Rebuild Only Widgets (No Start)

```powershell
# Build and copy without starting host
.\scripts\wc-build-all.ps1
.\scripts\wc-copy-widgets.ps1
```

**Use case:** Preparing widgets for deployment

---

## How Web Components Work

### Build Process

Each remote has a `vite.config.webcomponent.ts` (or webpack config for Angular):

**Vite remotes (React, Vue, Angular-Vite):**

```typescript
export default defineConfig({
  build: {
    lib: {
      entry: "./src/webcomponent.tsx",
      formats: ["iife"], // Immediately Invoked Function Expression
      name: "ShellWidget",
      fileName: "webcomponent",
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true, // Single file output
      },
    },
  },
});
```

**Key points:**

- **IIFE format:** Code executes immediately when script loads
- **Single file:** All dependencies bundled (no external imports)
- **Self-contained:** Includes React/Vue/Angular frameworks

**Angular Webpack:**

```javascript
// webpack.webcomponent.config.js
module.exports = {
  optimization: {
    splitChunks: false, // Don't split into chunks
    runtimeChunk: false, // Don't create runtime chunk
  },
  output: {
    filename: "angular-webpack-widget.js", // Single file
  },
};
```

---

### Registration Process

Each web component registers itself as a custom element:

**React Example:**

```typescript
// remotes/shell/src/webcomponent.tsx
class ShellWidget extends HTMLElement {
  connectedCallback() {
    const root = createRoot(this);
    root.render(<Header theme={this.getAttribute("theme")} />);
  }
}

customElements.define("shell-widget", ShellWidget);
```

**Angular Example:**

```typescript
// remotes/angular-webpack/src/main.webcomponent.ts
import { createCustomElement } from "@angular/elements";

const AngularElement = createCustomElement(AppComponent, { injector });
customElements.define("angular-webpack-widget", AngularElement);
```

**Vue Example:**

```typescript
// remotes/vue/src/webcomponent.ts
class VueWidget extends HTMLElement {
  connectedCallback() {
    const app = createApp(App);
    app.mount(this);
  }
}

customElements.define("vue-widget", VueWidget);
```

---

### Loading in Host

The `host-webcomponent` uses lazy loading:

```typescript
// host-webcomponent/src/utils/loadWebComponents.ts
export async function loadWebComponent(widgetName: string) {
  // Check if already loaded
  if (loadedWidgets.has(widgetName)) return;

  // Dynamically load script
  const script = document.createElement("script");
  script.src = `/widgets/${widgetName}.js`;
  document.head.appendChild(script);

  // Wait for registration
  await waitForCustomElement(widgetName);
}
```

**Pages use the custom hook:**

```typescript
// host-webcomponent/src/pages/ProductsPage.tsx
export const ProductsPage = () => {
  const { containerRef, loading, error } = useWebComponent(
    "products-widget",
    mode
  );

  return (
    <WebComponentLoader loading={loading} error={error} widgetName="Products">
      <div ref={containerRef}>
        <products-widget theme={mode} />
      </div>
    </WebComponentLoader>
  );
};
```

---

## Lazy Loading Strategy

**Initial page load:**

- Only loads `shell-widget.js` (~386 KB)
- Shell contains header/footer

**When user navigates to /products:**

- Loads `products-widget.js` (~497 KB)
- Only once (cached after first load)

**Benefits:**

- ✅ **87% reduction** in initial load size
- ✅ Faster initial page load
- ✅ Load only what's needed
- ✅ Better performance

**Comparison:**

| Strategy       | Initial Load | /products Page | Total    |
| -------------- | ------------ | -------------- | -------- |
| Eager (old)    | 2.4 MB       | 0 KB           | 2.4 MB   |
| Lazy (current) | 386 KB       | 497 KB         | 883 KB   |
| **Savings**    | **-84%**     | +497 KB        | **-63%** |

---

## Framework Variations

The project demonstrates 4 different build approaches:

### React + Vite

```
remotes/shell/
├── src/webcomponent.tsx       # Web component wrapper
├── vite.config.webcomponent.ts  # Vite build config
└── dist-webcomponent/
    └── webcomponent.js        # Single 386 KB file
```

**Build:** Vite lib mode with IIFE format

---

### Angular + Vite (Experimental)

```
remotes/angular-vite/
├── src/webcomponent.ts        # Manual Angular bootstrap
├── vite.config.webcomponent.ts  # Vite build config (inlined templates)
└── dist-webcomponent/
    └── angular-vite-widget.iife.js  # Single 969 KB file
```

**Build:** Vite with inlined HTML/CSS templates (hack for Angular)

**Note:** Templates inlined because Vite doesn't support Angular's `templateUrl`/`styleUrls`

---

### Angular + Webpack (Proper)

```
remotes/angular-webpack/
├── src/main.webcomponent.ts   # @angular/elements
├── webpack.webcomponent.config.js  # Custom webpack config
└── dist-webcomponent/
    └── angular-webpack-widget.js  # Single 168 KB file
```

**Build:** Angular CLI with `@angular/elements` and custom webpack config

**Proper approach:** Uses Angular's official web component API

---

### Vue + Vite

```
remotes/vue/
├── src/webcomponent.ts        # Web component wrapper
├── vite.config.webcomponent.ts  # Vite build config
└── dist-webcomponent/
    ├── vue-widget.iife.js     # 131 KB
    └── style.css              # 3.7 KB (separate)
```

**Build:** Vite lib mode with IIFE format

**Note:** CSS separate because Vue's scoped styles

---

## Integration Examples

### Standalone HTML

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Web Component Example</title>
  </head>
  <body>
    <!-- Shell widget (header/footer) -->
    <shell-widget theme="light" cart-count="3"></shell-widget>

    <!-- Products widget -->
    <products-widget theme="light"></products-widget>

    <!-- Load scripts -->
    <script src="/widgets/shell-widget.js"></script>
    <script src="/widgets/products-widget.js"></script>
  </body>
</html>
```

**Use case:** Embed in any HTML page (WordPress, static site, etc.)

---

### React Application

```tsx
// host-webcomponent/src/pages/ProductsPage.tsx
import { useWebComponent } from "../hooks/useWebComponent";

export const ProductsPage = () => {
  const { containerRef, loading, error } = useWebComponent(
    "products-widget",
    "light"
  );

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <div ref={containerRef}>
      <products-widget theme="light" />
    </div>
  );
};
```

**Use case:** Integrate into React host application

---

### Vue Application

```vue
<template>
  <div>
    <products-widget :theme="theme" />
  </div>
</template>

<script>
import { onMounted } from "vue";

export default {
  setup() {
    onMounted(async () => {
      await import("/widgets/products-widget.js");
    });

    return { theme: "light" };
  },
};
</script>
```

**Use case:** Integrate into Vue host application

---

## Comparison: Module Federation vs Web Components

| Feature          | Module Federation           | Web Components              |
| ---------------- | --------------------------- | --------------------------- |
| **Load Time**    | Runtime (dynamic)           | Build time (static)         |
| **Dependencies** | Shared at runtime           | Bundled in widget           |
| **File Size**    | Smaller (shared libs)       | Larger (standalone)         |
| **Integration**  | Requires Webpack/Vite       | Works anywhere              |
| **Startup**      | All remotes must run        | Just serve static files     |
| **Updates**      | Deploy remote separately    | Redeploy entire widget      |
| **Complexity**   | High (runtime coordination) | Low (simple scripts)        |
| **Best For**     | Micro-frontend apps         | Embedding in external sites |

**When to use Module Federation:**

- Complex micro-frontend architecture
- Need shared dependencies
- Frequent independent deployments
- Same tech stack across remotes

**When to use Web Components:**

- Embedding remotes in external sites
- Simple integration requirements
- Any tech stack (PHP, WordPress, etc.)
- Want maximum compatibility

---

## Troubleshooting

### Error: "Widgets directory not found"

**Cause:** `host-webcomponent/public/widgets/` doesn't exist  
**Fix:** Run `wc-build-all.ps1` then `wc-copy-widgets.ps1`

### Error: "No widget files found"

**Cause:** Widgets built but not copied  
**Fix:** Run `wc-copy-widgets.ps1`

### Error: "Web components not built"

**Cause:** `dist-webcomponent/` folders missing  
**Fix:** Run `wc-build-all.ps1`

### Error: "Widget loaded but not registered"

**Cause:** Script loaded but `customElements.define()` not called  
**Fix:** Check web component source code for proper registration

### Widget shows blank/error

**Cause:** Runtime error in web component  
**Fix:** Check browser console for errors

---

## Technical Details

### Build Output

**Single File Guarantee:**

All web components build to **single JavaScript files** using:

1. **Vite:** `inlineDynamicImports: true`
2. **Webpack:** `splitChunks: false, runtimeChunk: false`
3. **IIFE format:** Code executes on script load

**Why single file?**

- ✅ Simple integration (one `<script>` tag)
- ✅ No chunk loading issues
- ✅ Works anywhere
- ✅ Easier deployment

---

### Theme Support

Web components accept `theme` attribute:

```html
<products-widget theme="dark"></products-widget>
```

**How it works:**

1. Web component observes `theme` attribute
2. On change, updates internal state
3. Re-renders with new theme
4. CSS variables updated

**Example:**

```typescript
static get observedAttributes() { return ['theme']; }

attributeChangedCallback(name, oldValue, newValue) {
  if (name === 'theme' && oldValue !== newValue) {
    this.updateTheme(newValue);
  }
}
```

---

## Script Summary

| Script                | Build? | Copy? | Start? | Duration | Use Case        |
| --------------------- | ------ | ----- | ------ | -------- | --------------- |
| `wc-build-all.ps1`    | ✅     | ❌    | ❌     | ~40s     | Rebuild widgets |
| `wc-copy-widgets.ps1` | ❌     | ✅    | ❌     | ~1s      | Copy to host    |
| `wc-start.ps1`        | ✅     | ✅    | ✅     | ~1m      | Full workflow   |
| `wc-start-quick.ps1`  | ❌     | ❌    | ✅     | Instant  | Quick restart   |

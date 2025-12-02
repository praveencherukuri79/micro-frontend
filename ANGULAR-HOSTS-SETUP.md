# Angular Hosts Setup Guide

Complete guide for setting up and running Angular hosts with Module Federation (MF) and Web Components (WC) integration.

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Prerequisites](#prerequisites)
3. [Project Structure](#project-structure)
4. [Remotes Overview](#remotes-overview)
5. [Initial Setup](#initial-setup)
6. [Angular Module Federation Host](#angular-module-federation-host)
7. [Angular Web Component Host](#angular-web-component-host)
8. [Scripts Organization](#scripts-organization)
9. [Workflow Examples](#workflow-examples)
10. [Integration Patterns](#integration-patterns)
11. [Troubleshooting](#troubleshooting)

---

## 🎯 Project Overview

This micro-frontend project supports **4 host applications**:

| Host | Type | Port | Description |
|------|------|------|-------------|
| `host-react-mf` | React + Module Federation | 5000 | React host loading MF remotes |
| `host-react-wc` | React + Web Components | 5010 | React host loading WC remotes |
| `host-angular-mf` | Angular + Module Federation | 5007 | Angular host loading MF remotes |
| `host-angular-wc` | Angular + Web Components | 5011 | Angular host loading WC remotes |

### Remotes

| Remote | Framework | Port | MF Exposes | WC Tag |
|--------|-----------|------|------------|--------|
| `products` | React + Vite | 5001 | `./ProductsPage` | `<products-widget>` |
| `contact` | React + Vite | 5002 | `./ContactPage` | `<contact-widget>` |
| `shell` | React + Vite | 5003 | `./Header`, `./Footer` | `<shell-widget>` |
| `angular-webpack` | Angular + Webpack | 5004 | `./App` (mount function) | `<angular-webpack-widget>` |
| `angular-vite` | Angular + Vite | 5005 | `./App` (mount function) | `<angular-vite-widget>` |
| `vue` | Vue + Vite | 5006 | `./App` (mount function) | `<vue-widget>` |

---

## 📦 Prerequisites

- **Node.js**: v18+ (LTS recommended)
- **npm**: v9+
- **PowerShell**: 5.1+ (Windows)
- **Git**: For version control

---

## 📁 Project Structure

```
micro-frontend/
├── host-angular-mf/          # Angular Module Federation Host (Port 5007)
│   ├── src/
│   │   ├── app/
│   │   │   ├── app.component.ts
│   │   │   ├── app.module.ts
│   │   │   ├── pages/        # Remote page components
│   │   │   └── services/     # Theme service, etc.
│   │   ├── main.ts
│   │   └── index.html
│   ├── webpack.config.js     # Module Federation config
│   ├── angular.json
│   └── package.json
│
├── host-angular-wc/          # Angular Web Component Host (Port 5011)
│   ├── src/
│   │   ├── app/
│   │   │   ├── app.component.ts
│   │   │   ├── app.module.ts
│   │   │   ├── pages/        # Web component page components
│   │   │   └── services/
│   │   ├── main.ts
│   │   └── index.html
│   ├── public/
│   │   └── widgets/         # Copied web components
│   ├── angular.json
│   └── package.json
│
├── remotes/                  # Micro-frontend remotes
│   ├── products/            # React remote (Port 5001)
│   ├── contact/             # React remote (Port 5002)
│   ├── shell/               # React remote (Port 5003)
│   ├── angular-webpack/     # Angular remote (Port 5004)
│   ├── angular-vite/        # Angular remote (Port 5005)
│   └── vue/                 # Vue remote (Port 5006)
│
└── scripts/                  # Automation scripts
    ├── MF/                  # Module Federation scripts
    │   ├── build-all.ps1
    │   ├── start-react-preview.ps1
    │   ├── start-react-quick.ps1
    │   ├── start-react-watch.ps1
    │   ├── start-angular-preview.ps1
    │   ├── start-angular-quick.ps1
    │   └── start-angular-watch.ps1
    ├── WC/                  # Web Component scripts
    │   ├── build-all.ps1
    │   ├── copy-widgets.ps1
    │   ├── start-react-preview.ps1
    │   ├── start-react-quick.ps1
    │   ├── start-angular-preview.ps1
    │   └── start-angular-quick.ps1
    └── utils/               # Utility scripts
        ├── install-all.ps1
        ├── get-remotes.ps1
        ├── kill-ports.ps1
        ├── build-mf.ps1
        └── build-wc.ps1
```

---

## 🔌 Remotes Overview

### Module Federation Exposures

**React Remotes** (Products, Contact):
- Expose: `./ProductsPage`, `./ContactPage` (React components)
- Used by: React MF host (via `lazy(() => import("productsApp/ProductsPage"))`)
- **Note**: Angular hosts cannot directly use React components via MF

**Shell Remote**:
- Exposes: `./Header`, `./Footer` (React components)
- Used by: React MF host in layout
- **Note**: For Angular hosts, use Shell web component instead

**Framework-Agnostic Remotes** (Vue, Angular Webpack, Angular Vite):
- Expose: `./App` (mount function)
- Mount function signature:
  ```typescript
  function mount(
    container: HTMLElement,
    options: { theme?: 'light' | 'dark'; apiBasePath?: string }
  ): Promise<() => void> | (() => void)
  ```
- Used by: All hosts (React, Angular) via mount function pattern

### Web Component Exposures

All remotes build web components:
- Products: `<products-widget theme="light"></products-widget>`
- Contact: `<contact-widget theme="light"></contact-widget>`
- Shell: `<shell-widget component="header" theme="light"></shell-widget>`
- Angular Webpack: `<angular-webpack-widget theme="light"></angular-webpack-widget>`
- Angular Vite: `<angular-vite-widget theme="light"></angular-vite-widget>`
- Vue: `<vue-widget theme="light"></vue-widget>`

---

## 🚀 Initial Setup

### Step 1: Clone and Navigate

```powershell
git clone <repository-url>
cd micro-frontend
```

### Step 2: Install Dependencies

```powershell
# Install dependencies for all applications
.\scripts\utils\install-all.ps1
```

This script:
- Checks for `node_modules` in each application
- Installs missing dependencies in parallel
- Shows progress for each installation

### Step 3: Verify Setup

```powershell
# Verify all remotes are discovered
.\scripts\utils\get-remotes.ps1

# Should show:
# - products (Port 5001)
# - contact (Port 5002)
# - shell (Port 5003)
# - angular-webpack (Port 5004)
# - angular-vite (Port 5005)
# - vue (Port 5006)
```

---

## 🏗️ Angular Module Federation Host

### Architecture

The Angular MF host uses:
- **@angular-architects/module-federation**: For Module Federation support
- **@angular-builders/custom-webpack**: To customize webpack config
- **loadRemoteModule()**: To dynamically load remotes

### Configuration Files

#### 1. `package.json` Dependencies

```json
{
  "dependencies": {
    "@angular/core": "^17.3.0",
    "@angular/router": "^17.3.0",
    "@angular-architects/module-federation": "^17.0.8",
    "rxjs": "~7.8.0"
  },
  "devDependencies": {
    "@angular-builders/custom-webpack": "^17.0.0",
    "webpack": "^5.89.0"
  }
}
```

#### 2. `webpack.config.js`

```javascript
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const share = mf.share;

module.exports = {
  output: {
    uniqueName: "hostAngularMf",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      shared: share({
        "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true },
        "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true },
        "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true },
        "rxjs": { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true }
      })
    })
  ]
};
```

#### 3. `angular.json` Builder

```json
{
  "architect": {
    "build": {
      "builder": "@angular-builders/custom-webpack:browser",
      "options": {
        "customWebpackConfig": {
          "path": "./webpack.config.js"
        }
      }
    },
    "serve": {
      "builder": "@angular-builders/custom-webpack:dev-server"
    }
  }
}
```

#### 4. `main.ts` (Lazy Bootstrap)

```typescript
// main.ts - Lazy load bootstrap for Module Federation
import('./bootstrap')
  .catch(err => console.error(err));
```

```typescript
// bootstrap.ts - Actual app initialization
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
```

### Loading Remotes in Components

#### Example: Loading Vue Remote

```typescript
// vue-page.component.ts
import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';

interface MountOptions {
  theme?: 'light' | 'dark';
  apiBasePath?: string;
}

type MountFunction = (
  container: HTMLElement,
  options: MountOptions
) => Promise<() => void> | (() => void);

@Component({
  selector: 'app-vue-page',
  templateUrl: './vue-page.component.html',
  styleUrls: ['./vue-page.component.css']
})
export class VuePageComponent implements AfterViewInit, OnDestroy {
  @ViewChild('container', { static: false }) containerRef!: ElementRef<HTMLDivElement>;
  loading = true;
  error: string | null = null;
  private cleanupFn: (() => void) | null = null;

  ngAfterViewInit(): void {
    // Use setTimeout to avoid ExpressionChangedAfterItHasBeenCheckedError
    setTimeout(() => {
      this.loadRemote();
    });
  }

  private async loadRemote(): Promise<void> {
    try {
      this.loading = true;
      this.error = null;

      if (!this.containerRef?.nativeElement) {
        throw new Error('Container element not available');
      }

      // Load remote module
      const module = await loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:5006/assets/remoteEntry.js',
        exposedModule: './App'
      }) as { default: MountFunction };

      const mountFn = module.default;
      if (typeof mountFn !== 'function') {
        throw new Error('Remote module does not export a mount function');
      }

      const options: MountOptions = {
        theme: 'light',
        apiBasePath: window.location.origin
      };

      // Vue mount function is synchronous, others are async
      const cleanup = mountFn(this.containerRef.nativeElement, options);
      this.cleanupFn = cleanup instanceof Promise ? await cleanup : cleanup;
      
      this.loading = false;
    } catch (err: any) {
      this.error = `Failed to load Vue remote: ${err.message}`;
      this.loading = false;
      console.error('Error loading Vue remote:', err);
    }
  }

  ngOnDestroy(): void {
    if (this.cleanupFn) {
      this.cleanupFn();
      this.cleanupFn = null;
    }
  }
}
```

#### Template

```html
<!-- vue-page.component.html -->
<div class="page-container">
  <div *ngIf="loading" class="loading">
    <div class="spinner"></div>
    <p>Loading Vue remote...</p>
  </div>
  <div *ngIf="error" class="error">
    <p class="error-title">Failed to load Vue Remote</p>
    <p class="error-message">{{ error }}</p>
    <p class="error-hint">
      Make sure the Vue remote is running on
      <code>http://localhost:5006</code> and built.
    </p>
  </div>
  <div #container *ngIf="!loading && !error" class="remote-container">
    <!-- Vue remote will be mounted here -->
  </div>
</div>
```

### Critical Requirements

1. **Separate HTML/CSS Files**: Angular components MUST have separate `.html` and `.css` files
   - ❌ **NEVER** use inline `template` or `styles` in `@Component` decorator
   - ✅ **ALWAYS** use `templateUrl` and `styleUrls`
   - This follows Angular best practices and AI guidelines

2. **Match React Host Structure**: Angular hosts should work the same as React hosts
   - Same layout (Shell Header/Footer)
   - Same navigation
   - Same theme management
   - Same page structure

### Key Angular Best Practices

1. **Use `AfterViewInit` for ViewChild**: Ensures `ViewChild` is available
   ```typescript
   @ViewChild('container', { static: false }) containerRef!: ElementRef;
   
   ngAfterViewInit(): void {
     // ViewChild is now available
   }
   ```

2. **Avoid ExpressionChangedAfterItHasBeenCheckedError**: Use `setTimeout` or `Promise.resolve().then()`
   ```typescript
   ngAfterViewInit(): void {
     setTimeout(() => {
       this.loadRemote();
     });
   }
   ```

3. **Cleanup in `ngOnDestroy`**: Always clean up mounted remotes
   ```typescript
   ngOnDestroy(): void {
     if (this.cleanupFn) {
       this.cleanupFn();
     }
   }
   ```

4. **Handle Async Mount Functions**: Some remotes return `Promise<() => void>`, others return `() => void`
   ```typescript
   const cleanup = mountFn(container, options);
   this.cleanupFn = cleanup instanceof Promise ? await cleanup : cleanup;
   ```

### Shell Integration (Header/Footer)

For Angular MF host, use Shell web component in the layout:

```typescript
// app.component.ts
export class AppComponent implements OnInit {
  shellLoaded = false;
  currentTheme: 'light' | 'dark' = 'light';

  ngOnInit(): void {
    this.loadShellWidget();
  }

  private async loadShellWidget(): Promise<void> {
    const script = document.createElement('script');
    script.src = '/widgets/shell-widget.js';
    script.type = 'module';
    await new Promise((resolve, reject) => {
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Failed to load shell widget'));
      document.head.appendChild(script);
    });
    await customElements.whenDefined('shell-widget');
    this.shellLoaded = true;
  }
}
```

```html
<!-- app.component.html -->
<shell-widget 
  *ngIf="shellLoaded"
  component="header"
  [attr.theme]="currentTheme">
</shell-widget>

<main>
  <router-outlet></router-outlet>
</main>

<shell-widget 
  *ngIf="shellLoaded"
  component="footer"
  [attr.theme]="currentTheme">
</shell-widget>
```

```typescript
// app.module.ts
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  // ...
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Required for web components
})
export class AppModule {}
```

### Running Angular MF Host

```powershell
# Preview mode (builds remotes, starts all)
.\scripts\MF\start-angular-preview.ps1

# Quick start (assumes remotes already built)
.\scripts\MF\start-angular-quick.ps1

# Watch mode (auto-rebuild on changes)
.\scripts\MF\start-angular-watch.ps1
```

---

## 🧩 Angular Web Component Host

### Architecture

The Angular WC host:
- Uses web components (custom elements) from remotes
- Loads widget scripts dynamically
- Uses `CUSTOM_ELEMENTS_SCHEMA` to recognize custom elements

### Configuration

#### `angular.json` Assets

```json
{
  "assets": [
    "src/favicon.ico",
    "src/assets",
    {
      "glob": "**/*",
      "input": "public/widgets",
      "output": "/widgets"
    }
  ]
}
```

#### Loading Web Components

```typescript
// products-page.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit, OnDestroy {
  widgetLoaded = false;
  theme: 'light' | 'dark' = 'light';
  private themeSubscription?: Subscription;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeSubscription = this.themeService.theme$.subscribe(theme => {
      this.theme = theme;
      this.updateWidgetTheme();
    });
    this.loadWidget();
  }

  private async loadWidget(): Promise<void> {
    try {
      // Check if already loaded
      if (customElements.get('products-widget')) {
        this.widgetLoaded = true;
        return;
      }

      const script = document.createElement('script');
      script.src = '/widgets/products-widget.js';
      script.type = 'module'; // Important for ES modules

      await new Promise<void>((resolve, reject) => {
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Failed to load products widget'));
        document.head.appendChild(script);
      });

      await customElements.whenDefined('products-widget');
      this.widgetLoaded = true;
    } catch (err) {
      console.error('Error loading products widget:', err);
    }
  }

  private updateWidgetTheme(): void {
    const widget = document.querySelector('products-widget');
    if (widget) {
      widget.setAttribute('theme', this.theme);
    }
  }

  ngOnDestroy(): void {
    this.themeSubscription?.unsubscribe();
  }
}
```

```html
<!-- products-page.component.html -->
<div class="page-container">
  <div *ngIf="!widgetLoaded" class="loading">
    <p>Loading products widget...</p>
  </div>
  <products-widget 
    *ngIf="widgetLoaded"
    [attr.theme]="theme">
  </products-widget>
</div>
```

### Running Angular WC Host

```powershell
# Preview mode (builds web components, copies to host, starts)
.\scripts\WC\start-angular-preview.ps1

# Quick start (assumes widgets already built and copied)
.\scripts\WC\start-angular-quick.ps1
```

---

## 📜 Scripts Organization

### Script Naming Convention

- **MF scripts**: `scripts/MF/start-angular-preview.ps1`
- **WC scripts**: `scripts/WC/start-angular-preview.ps1`
- **Utils**: `scripts/utils/install-all.ps1`

### Script Types

#### Preview Scripts
- Build remotes/web components
- Copy widgets (for WC)
- Start all applications
- **Use for**: First run, production-like testing

#### Quick Scripts
- Skip build steps
- Start applications only
- **Use for**: Development when remotes already built

#### Watch Scripts (MF only)
- Initial build
- Start in watch mode (auto-rebuild)
- **Use for**: Active development

### Script Flow

All scripts follow this sequential flow:

1. **Check Dependencies**: Verify `node_modules` exist
2. **Verify Directories**: Ensure host and remotes exist
3. **Clean Ports**: Kill processes on relevant ports (context-aware)
4. **Build**: Build remotes/web components (parallel)
5. **Copy**: Copy widgets to host (WC only)
6. **Start**: Start remotes and host
7. **Error Handling**: Proper error messages at each step

---

## 🔄 Workflow Examples

### First Time Setup

```powershell
# 1. Install all dependencies
.\scripts\utils\install-all.ps1

# 2. Start Angular MF host (preview mode)
.\scripts\MF\start-angular-preview.ps1

# Opens:
# - http://localhost:5007 (Angular MF host)
# - http://localhost:5001-5006 (Remotes)
```

### Development Workflow

```powershell
# Option 1: Watch mode (auto-rebuild)
.\scripts\MF\start-angular-watch.ps1

# Option 2: Quick start (manual rebuild)
.\scripts\MF\start-angular-quick.ps1
# Then rebuild remotes manually when needed
```

### Web Component Workflow

```powershell
# Build and start Angular WC host
.\scripts\WC\start-angular-preview.ps1

# Opens:
# - http://localhost:5011 (Angular WC host)
```

---

## 🎨 Integration Patterns

### Pattern 1: Module Federation (Framework-Agnostic Mount)

**When to use**: Cross-framework integration (Angular host + Vue/Angular remotes)

**Pattern**:
```typescript
const module = await loadRemoteModule({
  type: 'module',
  remoteEntry: 'http://localhost:5006/assets/remoteEntry.js',
  exposedModule: './App'
});

const mountFn = module.default;
const cleanup = await mountFn(container, { theme, apiBasePath });
```

**Remotes that support this**:
- Vue (`./App`)
- Angular Webpack (`./App`)
- Angular Vite (`./App`)

### Pattern 2: Web Components

**When to use**: Any framework, simple integration

**Pattern**:
```typescript
// Load script
const script = document.createElement('script');
script.src = '/widgets/products-widget.js';
script.type = 'module';
document.head.appendChild(script);

// Use in template
<products-widget [attr.theme]="theme"></products-widget>
```

**All remotes support this**.

### Pattern 3: React Components (React Host Only)

**When to use**: React-to-React integration

**Pattern**:
```typescript
const ProductsPage = lazy(() => import("productsApp/ProductsPage"));
```

**Note**: Angular hosts cannot use this pattern directly.

---

## 🔧 Troubleshooting

### Issue: "Can not find remote module ./App"

**Cause**: Wrong exposed module name or remote not built.

**Solution**:
1. Check remote's `federation.config.ts` exposes `./App`
2. Rebuild remote: `cd remotes/vue && npm run build`
3. Verify `dist/assets/remoteEntry.js` exists

### Issue: "mountFn is not a function"

**Cause**: Remote doesn't export mount function, or wrong module loaded.

**Solution**:
1. Verify remote exposes `./App` (not `./Component`)
2. Check remote's mount function is exported as default
3. Verify `loadRemoteModule` returns `{ default: MountFunction }`

### Issue: "ExpressionChangedAfterItHasBeenCheckedError"

**Cause**: Loading remote in `ngOnInit` instead of `ngAfterViewInit`.

**Solution**:
```typescript
ngAfterViewInit(): void {
  setTimeout(() => {
    this.loadRemote();
  });
}
```

### Issue: "Container element not available"

**Cause**: `ViewChild` not ready or template not rendered.

**Solution**:
1. Use `@ViewChild('container', { static: false })`
2. Load in `ngAfterViewInit` (not `ngOnInit`)
3. Add null check: `if (!this.containerRef?.nativeElement) return;`

### Issue: Port already in use

**Cause**: Previous process still running.

**Solution**:
```powershell
# Kill all Node processes
.\scripts\utils\kill-ports.ps1 -Context All

# Or kill specific context
.\scripts\utils\kill-ports.ps1 -Context MF
.\scripts\utils\kill-ports.ps1 -Context WC
```

### Issue: Web component not loading

**Cause**: Script not loaded as module or path incorrect.

**Solution**:
1. Ensure `script.type = 'module'`
2. Verify widget file exists in `public/widgets/`
3. Check `angular.json` assets configuration
4. Wait for `customElements.whenDefined()` before using

---

## 📚 References

- [Angular Module Federation Guide](https://www.angulararchitects.io/en/blog/micro-frontends-with-modern-angular/)
- [Angular Custom Elements](https://angular.io/guide/elements)
- [Webpack Module Federation](https://webpack.js.org/concepts/module-federation/)
- [Angular Lifecycle Hooks](https://angular.io/guide/lifecycle-hooks)
- [ViewChild Documentation](https://angular.io/api/core/ViewChild)

---

## 📋 50-Step Process

See `ANGULAR-HOSTS-50-STEP-PROCESS.md` for the complete step-by-step implementation guide.

## ✅ Checklist for Angular Host Integration

### Module Federation Host

- [ ] `@angular-architects/module-federation` installed
- [ ] `@angular-builders/custom-webpack` installed
- [ ] `webpack.config.js` configured with shared modules
- [ ] `angular.json` uses custom webpack builder
- [ ] `main.ts` lazy loads `bootstrap.ts`
- [ ] `bootstrap.ts` contains actual app initialization
- [ ] Page components use `loadRemoteModule()`
- [ ] `ViewChild` uses `static: false` and `AfterViewInit`
- [ ] Cleanup in `ngOnDestroy`
- [ ] Handle both sync and async mount functions

### Web Component Host

- [ ] `CUSTOM_ELEMENTS_SCHEMA` in `app.module.ts`
- [ ] `angular.json` assets include `public/widgets`
- [ ] Widget scripts loaded with `type="module"`
- [ ] Wait for `customElements.whenDefined()` before use
- [ ] Theme syncing via attribute updates
- [ ] Error handling for failed widget loads

---

**Last Updated**: Based on current project state
**Angular Version**: 17.3.0
**Module Federation**: @angular-architects/module-federation 17.0.8


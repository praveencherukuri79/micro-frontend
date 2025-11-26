# 🏗️ Architecture Overview

## Dual-Mode Micro-Frontend Architecture

This project demonstrates a **dual-mode architecture** where each remote module can function as:
1. **Module Federation Remote** - For React micro-frontend apps
2. **Web Component** - For integration into any application

```
┌─────────────────────────────────────────────────────────────────┐
│                      REMOTE COMPONENT                            │
│  (Single React codebase: ProductsPage.tsx, ContactPage.tsx)    │
└──────────────────┬──────────────────────────────┬───────────────┘
                   │                              │
        ┌──────────▼──────────┐        ┌─────────▼──────────┐
        │  MODULE FEDERATION  │        │   WEB COMPONENT    │
        │      WRAPPER        │        │     WRAPPER        │
        └──────────┬──────────┘        └─────────┬──────────┘
                   │                              │
        ┌──────────▼──────────┐        ┌─────────▼──────────┐
        │   remoteEntry.js    │        │  {name}-widget.js  │
        │   (Federation)      │        │  (Custom Element)  │
        └──────────┬──────────┘        └─────────┬──────────┘
                   │                              │
    ┌──────────────▼──────────────┐    ┌─────────▼──────────────┐
    │  Used in React/Vite apps    │    │  Used ANYWHERE         │
    │  via Module Federation      │    │  HTML, Vue, Angular    │
    │  import('remote/Component') │    │  WordPress, etc.       │
    └─────────────────────────────┘    │  <products-widget>     │
                                       └────────────────────────┘
```

## Project Structure

```
module-federation/
│
├── host/                           # Main React application
│   ├── src/
│   │   ├── App.tsx                # Loads remotes via Module Federation
│   │   ├── store/                 # Shared Zustand stores
│   │   └── theme/                 # MUI theme
│   └── vite.config.ts             # Federation consumer config
│
├── remotes/
│   ├── shell/                     # Header/Footer remote
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── Header.tsx    # ← Actual component
│   │   │   │   └── Footer.tsx    # ← Actual component
│   │   │   ├── main.tsx          # ← Federation entry
│   │   │   └── webcomponent.tsx  # ← Web Component wrapper
│   │   ├── vite.config.ts        # Federation config
│   │   ├── vite.config.webcomponent.ts  # Web Component build
│   │   ├── dist/                 # Module Federation build
│   │   └── dist-webcomponent/    # Web Component build
│   │
│   ├── products/                  # Products remote
│   │   ├── src/
│   │   │   ├── ProductsPage.tsx  # ← Actual component
│   │   │   ├── main.tsx          # ← Federation entry
│   │   │   └── webcomponent.tsx  # ← Web Component wrapper
│   │   ├── vite.config.ts
│   │   ├── vite.config.webcomponent.ts
│   │   ├── dist/
│   │   └── dist-webcomponent/
│   │
│   └── contact/                   # Contact remote
│       ├── src/
│       │   ├── ContactPage.tsx   # ← Actual component
│       │   ├── main.tsx          # ← Federation entry
│       │   └── webcomponent.tsx  # ← Web Component wrapper
│       ├── vite.config.ts
│       ├── vite.config.webcomponent.ts
│       ├── dist/
│       └── dist-webcomponent/
│
├── examples/
│   ├── webcomponent-example.html  # Full demo
│   └── simple-integration.html    # Minimal example
│
├── start.ps1                      # Quick start script
├── start-watch.ps1                # Development with auto-rebuild
├── start-preview.ps1              # Build then start
├── build-webcomponents.ps1        # Build all web components
│
├── README.md                      # Main documentation
├── QUICKSTART.md                  # Setup guide
├── WEB_COMPONENTS.md              # Web Component guide
└── ARCHITECTURE.md                # This file
```

## Build Outputs

Each remote produces **two separate builds**:

### 1. Module Federation Build (`dist/`)

```bash
npm run build
```

**Output:** `dist/assets/remoteEntry.js`  
**Used by:** Host React app via Module Federation  
**How:** `import('productsApp/ProductsPage')`

### 2. Web Component Build (`dist-webcomponent/`)

```bash
npm run build:webcomponent
```

**Output:** 
- `dist-webcomponent/{name}-widget.js` (ES module)
- `dist-webcomponent/{name}-widget.umd.js` (UMD)

**Used by:** Any HTML page, any framework  
**How:** `<products-widget theme="light"></products-widget>`

## Data Flow

### Module Federation Mode

```
Browser Request
      │
      ▼
┌─────────────┐
│   Host App  │  (localhost:5000)
│  (Port 5000)│
└──────┬──────┘
       │
       │ Loads remote at runtime
       │
       ▼
┌──────────────────┐
│ Remote Federation│  http://localhost:5001/assets/remoteEntry.js
│ Entry Point      │
└──────┬───────────┘
       │
       │ Returns React Component
       │
       ▼
┌──────────────────┐
│  ProductsPage    │  Rendered in Host's React tree
│  Component       │  with shared dependencies
└──────────────────┘
```

### Web Component Mode

```
Browser Request
      │
      ▼
┌─────────────────┐
│   HTML Page     │  (Any application)
│   <products-    │
│    widget>      │
└──────┬──────────┘
       │
       │ Loads script
       │
       ▼
┌──────────────────┐
│ products-widget. │  Standalone bundle (no host needed)
│ js               │
└──────┬───────────┘
       │
       │ Registers custom element
       │
       ▼
┌──────────────────┐
│ ProductsPage     │  Rendered in Shadow DOM
│ Component        │  Self-contained with styles
└──────────────────┘
```

## Development Workflow

### Module Federation Development

```bash
# Terminal 1: Shell remote (watch + preview)
cd remotes/shell
npm run dev:watch

# Terminal 2: Products remote (watch + preview)
cd remotes/products
npm run dev:watch

# Terminal 3: Contact remote (watch + preview)
cd remotes/contact
npm run dev:watch

# Terminal 4: Host (dev mode)
cd host
npm run dev
```

**Or use the script:**
```powershell
.\start-watch.ps1
```

**Result:**
- Edit any file → Auto rebuilds → Refresh browser
- Host changes → Auto reload (no refresh needed)

### Web Component Development

```bash
# 1. Build web components
.\build-webcomponents.ps1

# 2. Open example HTML file
# examples/webcomponent-example.html

# 3. Make changes to components
# 4. Rebuild: npm run build:webcomponent
# 5. Refresh browser
```

## Deployment Strategies

### Strategy 1: Module Federation Only

**Deploy:**
- Host to `https://app.example.com`
- Shell to `https://cdn.example.com/shell/`
- Products to `https://cdn.example.com/products/`
- Contact to `https://cdn.example.com/contact/`

**Host config:**
```typescript
remotes: {
  shellApp: 'https://cdn.example.com/shell/assets/remoteEntry.js',
  productsApp: 'https://cdn.example.com/products/assets/remoteEntry.js',
  contactApp: 'https://cdn.example.com/contact/assets/remoteEntry.js',
}
```

### Strategy 2: Web Components Only

**Deploy:**
- `products-widget.js` to `https://widgets.example.com/products-widget.js`
- `contact-widget.js` to `https://widgets.example.com/contact-widget.js`
- `shell-widget.js` to `https://widgets.example.com/shell-widget.js`

**Usage:**
```html
<!-- In ANY application -->
<products-widget theme="light"></products-widget>
<script type="module" src="https://widgets.example.com/products-widget.js"></script>
```

### Strategy 3: Hybrid (Both!)

**Deploy both builds:**
- Module Federation for main React apps
- Web Components for integrations (marketing sites, WordPress, etc.)

**Benefits:**
- Same codebase, multiple distribution methods
- Maximum flexibility
- Future-proof

## Technology Decisions

### Why Module Federation?
- **Runtime integration** - No build-time dependencies
- **Independent deployment** - Update remotes without rebuilding host
- **Shared dependencies** - Efficient bundle sizes
- **Team autonomy** - Different teams own different remotes

### Why Web Components?
- **Framework agnostic** - Works anywhere
- **Standard-based** - Native browser support
- **Encapsulation** - Styles don't leak
- **Wide adoption** - Supported everywhere

### Why Vite?
- **Fast** - Lightning-fast dev server and builds
- **Modern** - Native ESM support
- **Plugin ecosystem** - Great tooling
- **DX** - Hot Module Replacement (HMR)

### Why Both?
- **Flexibility** - Choose the right tool for the job
- **Progressive migration** - Start with one, add the other later
- **Maximum reach** - Module Federation for React apps, Web Components for everything else
- **Single source of truth** - One component, two wrappers

## Best Practices

### Component Design

✅ **DO:**
- Keep components self-contained
- Accept configuration via props/attributes
- Emit events for parent communication
- Handle loading and error states
- Support theming

❌ **DON'T:**
- Depend on parent context (except MUI theme)
- Use global state outside component
- Make assumptions about routing
- Hardcode styles that can't be themed

### State Management

**Module Federation:**
- Can share Zustand stores across remotes
- Host provides global state
- Remotes can access via import

**Web Components:**
- Self-contained state (useState, etc.)
- Communicate via attributes and events
- No shared state assumption

### Styling

**Both modes use MUI:**
- ThemeProvider wraps components
- Accepts `theme` prop/attribute
- Consistent UI across modes

## Performance Considerations

### Module Federation
- **Shared dependencies** - React, MUI loaded once
- **Code splitting** - Lazy load remotes
- **Caching** - Remotes cached by browser

### Web Components
- **Bundle size** - Includes all dependencies
- **Trade-off** - Larger but self-contained
- **Optimization** - Tree-shaking, minification

### Recommendations
- Use Module Federation for apps in same ecosystem
- Use Web Components for cross-framework integration
- Consider bundle size vs flexibility trade-off

## Security

### Module Federation
- **CORS** - Configure properly
- **CSP** - Allow script-src from remote domains
- **Trust** - Only load from trusted remotes

### Web Components
- **XSS** - Validate all inputs
- **Shadow DOM** - Provides style encapsulation
- **Events** - Sanitize event data

## Future Enhancements

Possible additions:
- [ ] Server-Side Rendering (SSR)
- [ ] Versioning strategy
- [ ] A/B testing support
- [ ] Analytics integration
- [ ] Error tracking
- [ ] Performance monitoring
- [ ] Automated testing
- [ ] CI/CD pipeline
- [ ] Storybook integration
- [ ] TypeScript strict mode

---

**This architecture provides maximum flexibility while maintaining a single source of truth for components.** 🎉


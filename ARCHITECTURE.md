# 🏗️ Architecture Overview

## Dual-Mode Micro-Frontend Architecture

Each remote module functions in **two modes** from a single codebase:

```
┌──────────────────────────────────────────┐
│     REMOTE COMPONENT (React + TS)        │
│   ProductsPage.tsx / ContactPage.tsx     │
└─────────────┬────────────────────────────┘
              │
        ┌─────┴─────┐
        │           │
   ┌────▼───┐  ┌───▼────┐
   │ Module │  │  Web   │
   │  Fed   │  │Component│
   └────┬───┘  └───┬────┘
        │          │
    ┌───▼──┐   ┌──▼────┐
    │React │   │  Any  │
    │ Apps │   │  App  │
    └──────┘   └───────┘
```

## Project Structure

```
module-federation/
│
├── host/                      # Main React application
│   ├── src/
│   │   ├── App.tsx           # Loads remote modules
│   │   ├── components/       # ErrorBoundary
│   │   ├── pages/            # Local pages
│   │   ├── store/            # Zustand stores
│   │   └── theme/            # MUI theme
│   └── vite.config.ts        # Federation consumer config
│
├── remotes/
│   ├── shell/                # Header/Footer (Port 5003)
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── Header.tsx
│   │   │   │   └── Footer.tsx
│   │   │   ├── main.tsx               # Standalone entry
│   │   │   └── webcomponent.tsx       # Web Component wrapper
│   │   ├── vite.config.ts             # Federation config
│   │   └── vite.config.webcomponent.ts # Web Component build
│   │
│   ├── products/             # Products page (Port 5001)
│   │   └── [same structure as shell]
│   │
│   └── contact/              # Contact page (Port 5002)
│       └── [same structure as shell]
│
├── widgets/                  # Built Web Component files
├── *.ps1                     # Development scripts
└── *.md                      # Documentation
```

## Build Modes

Each remote produces **two separate builds**:

### 1. Module Federation Build

```bash
npm run build
```

**Output:** `dist/assets/remoteEntry.js`  
**Usage:** `import('productsApp/ProductsPage')`  
**For:** React apps with Module Federation

### 2. Web Component Build

```bash
npm run build:webcomponent
```

**Output:** `dist-webcomponent/{name}-widget.js`  
**Usage:** `<products-widget theme="light"></products-widget>`  
**For:** ANY application (Vue, Angular, WordPress, etc.)

## Data Flow

### Module Federation Mode

```
┌─────────────┐
│  Host App   │ Loads remotes at runtime
└──────┬──────┘
       │
       ▼
┌──────────────────┐
│ remoteEntry.js   │ Federated module
└──────┬───────────┘
       │
       ▼
┌──────────────────┐
│ React Component  │ Rendered in host's tree
└──────────────────┘
```

### Web Component Mode

```
┌─────────────────┐
│   HTML Page     │ Any application
└──────┬──────────┘
       │
       ▼
┌──────────────────┐
│ widget.js        │ Standalone bundle
└──────┬───────────┘
       │
       ▼
┌──────────────────┐
│ Custom Element   │ Self-contained
└──────────────────┘
```

## Development Workflow

### Quick Start

```powershell
# Instant start (if already built)
.\start.ps1

# With auto-rebuild (recommended)
.\start-watch.ps1

# Build then start
.\start-preview.ps1
```

### Making Changes

**Module Federation:**
- Edit files → Auto rebuild → Refresh browser

**Web Components:**
1. Edit files
2. Run `npm run build:webcomponent`
3. Refresh browser

## Key Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.3 | UI Library |
| TypeScript | 5.9 | Type Safety |
| Vite | 5.4 | Build Tool |
| Material-UI | 5.18 | UI Components |
| Zustand | 4.5 | State Management |
| React Router | 6.30 | Routing |
| Module Federation | 1.4 | Micro-frontends |
| Web Components | Native | Universal integration |

## Why This Architecture?

### Module Federation Benefits
- ✅ Runtime integration (no build-time coupling)
- ✅ Independent deployment
- ✅ Shared dependencies
- ✅ Team autonomy

### Web Components Benefits
- ✅ Framework agnostic
- ✅ Standard-based
- ✅ Encapsulation
- ✅ Wide adoption

### Both Together
- ✅ Maximum flexibility
- ✅ Single source of truth
- ✅ Choose the right tool for each use case

## Best Practices

### Component Design

**✅ DO:**
- Keep components self-contained
- Accept configuration via props/attributes
- Emit events for parent communication
- Support theming
- Handle loading and error states

**❌ DON'T:**
- Depend on parent context
- Use global state outside component
- Make routing assumptions
- Hardcode non-themeable styles

### State Management

| Mode | Approach |
|------|----------|
| **Module Federation** | Share Zustand stores across remotes |
| **Web Component** | Self-contained state, communicate via events |

## Performance

### Module Federation
- Shared dependencies → React/MUI loaded once
- Code splitting → Lazy load remotes
- Browser caching → Remotes cached

### Web Components
- Self-contained → Includes all dependencies
- Trade-off → Larger but independent
- Optimized → Tree-shaking, minification

**Recommendation:** Use Module Federation for same-ecosystem apps, Web Components for cross-framework integration.

## Deployment

### Module Federation

Deploy to CDN:
```
Host:     https://app.example.com
Shell:    https://cdn.example.com/shell/
Products: https://cdn.example.com/products/
Contact:  https://cdn.example.com/contact/
```

Update host config:
```typescript
remotes: {
  shellApp: 'https://cdn.example.com/shell/assets/remoteEntry.js',
  productsApp: 'https://cdn.example.com/products/assets/remoteEntry.js',
  contactApp: 'https://cdn.example.com/contact/assets/remoteEntry.js',
}
```

### Web Components

Deploy widgets:
```
https://widgets.example.com/products-widget.js
https://widgets.example.com/contact-widget.js
https://widgets.example.com/shell-widget.js
```

Use anywhere:
```html
<products-widget theme="light"></products-widget>
<script type="module" src="https://widgets.example.com/products-widget.js"></script>
```

## Security

### Module Federation
- Configure CORS properly
- Set appropriate CSP headers
- Only load from trusted remotes
- Verify remote integrity

### Web Components
- Validate all inputs
- Sanitize event data
- Use Shadow DOM for style encapsulation
- Prevent XSS vulnerabilities

## Future Enhancements

- [ ] Server-Side Rendering (SSR)
- [ ] Versioning strategy
- [ ] A/B testing support
- [ ] Analytics integration
- [ ] Error tracking
- [ ] Performance monitoring
- [ ] Automated testing suite
- [ ] CI/CD pipeline
- [ ] Storybook integration

---

**Clean architecture with dual-mode deployment from a single codebase.** 🎉

# Module Federation Store

A modern e-commerce application demonstrating **Module Federation** with React, Material-UI, and Vite. This project showcases micro-frontend architecture with shared state management and theming.

## 🎯 What This Is

A complete Module Federation setup with **dual deployment modes**:
- **Host Application** (Port 5000) - Main app that loads remote modules
- **Shell Remote** (Port 5003) - Provides Header & Footer components
- **Products Remote** (Port 5001) - Product catalog page
- **Contact Remote** (Port 5002) - Contact form page

### ✨ Dual Mode Architecture

Each remote can be used in **TWO ways**:

| Mode | Use Case | Integration |
|------|----------|-------------|
| **Module Federation** | Micro-frontends in React apps | `import('remoteApp/Component')` |
| **Web Component** | ANY application (Vue, Angular, WordPress, etc.) | `<products-widget>` HTML tag |

**See [WEB_COMPONENTS.md](WEB_COMPONENTS.md) for Web Component usage!**

## 🚀 Quick Start

**See [QUICKSTART.md](QUICKSTART.md) for detailed setup instructions.**

### Module Federation Mode

```powershell
# Just start servers (assumes already built)
.\start.ps1

# With watch mode (auto-rebuild on changes)
.\start-watch.ps1

# With build then start (no watch)
.\start-preview.ps1
```

Then open **http://localhost:5000**

### Web Component Mode

```powershell
# Build all web components
.\build-webcomponents.ps1

# Then open examples/webcomponent-example.html in browser
```

**See [WEB_COMPONENTS.md](WEB_COMPONENTS.md) for integration guide!**

## 📁 Project Structure

```
module-federation/
├── host/                    # Main application (Port 5000)
│   ├── src/
│   │   ├── components/      # ErrorBoundary
│   │   ├── pages/           # HomePage
│   │   ├── store/           # Zustand stores (theme, cart)
│   │   ├── theme/           # MUI theme config
│   │   └── App.tsx
│   └── vite.config.ts       # Federation config
│
├── remotes/
│   ├── shell/               # Header/Footer (Port 5003)
│   ├── products/            # Products page (Port 5001)
│   └── contact/             # Contact page (Port 5002)
│
├── start-preview.ps1        # ✅ Use this to start
└── README.md
```

## 🏗️ Module Federation Setup

### Host Configuration

```typescript
// host/vite.config.ts
federation({
  name: 'host-app',
  remotes: {
    shellApp: 'http://localhost:5003/assets/remoteEntry.js',
    productsApp: 'http://localhost:5001/assets/remoteEntry.js',
    contactApp: 'http://localhost:5002/assets/remoteEntry.js',
  },
  shared: ['react', 'react-dom', '@mui/material', 'zustand', 'react-router-dom'],
})
```

### Remote Configuration

```typescript
// remotes/products/vite.config.ts
federation({
  name: 'productsApp',
  filename: 'remoteEntry.js',
  exposes: {
    './ProductsPage': './src/ProductsPage',
  },
  shared: ['react', 'react-dom', '@mui/material', 'zustand'],
})
```

## 🎨 Features

- ✅ **Module Federation** - Micro-frontend architecture
- ✅ **React 18 + TypeScript** - Modern React with type safety
- ✅ **Material-UI** - Beautiful, responsive components
- ✅ **Vite** - Lightning-fast builds
- ✅ **Zustand** - Lightweight state management
- ✅ **Light/Dark Theme** - Toggle theme across all modules
- ✅ **React Router** - Client-side navigation
- ✅ **Shopping Cart** - Shared cart state across remotes
- ✅ **Error Boundaries** - Graceful error handling

## 📦 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.3 | UI Library |
| TypeScript | 5.9 | Type Safety |
| Vite | 5.4 | Build Tool |
| Material-UI | 5.18 | UI Components |
| Zustand | 4.5 | State Management |
| React Router | 6.30 | Routing |
| @originjs/vite-plugin-federation | 1.4 | Module Federation |

## 🔧 Development Workflow

### Important: Preview Mode Required

⚠️ **Remotes must run in PREVIEW mode (not dev mode)**

Why? Vite's dev server doesn't generate `remoteEntry.js` files needed for Module Federation.

**Recommended workflow (with auto-rebuild):**
```powershell
# Use watch mode script - auto-rebuilds on file changes!
.\start-watch.ps1
```

This starts:
- Build watchers for each remote (auto-rebuild on save)
- Preview servers for each remote
- Host dev server

**Manual workflow:**
```powershell
# 1. Build remotes once (initial build)
cd remotes/shell && npm run build
cd ../products && npm run build
cd ../contact && npm run build

# 2. Start each remote with watch mode (one command each)
cd remotes/shell && npm run dev:watch     # Terminal 1
cd remotes/products && npm run dev:watch  # Terminal 2
cd remotes/contact && npm run dev:watch   # Terminal 3

# 3. Start host in dev mode
cd host && npm run dev                    # Terminal 4
```

The `dev:watch` command runs both `build:watch` and `preview` together!

### Making Changes

**With Watch Mode (Recommended):**
- **Host changes**: Edit → Auto reload ✅
- **Remote changes**: Edit → Auto rebuild → Refresh browser 🔄

**Without Watch Mode:**
- **Host changes**: Edit → Auto reload ✅
- **Remote changes**: Run `npm run build` → Refresh browser 🔧

## 🛠️ Building for Production

```bash
# Build all applications
cd host && npm run build
cd ../remotes/shell && npm run build
cd ../products && npm run build
cd ../contact && npm run build
```

## 🎓 Key Concepts

### 1. Lazy Loading Remotes

```typescript
// host/src/App.tsx
const ProductsPage = lazy(() => import('productsApp/ProductsPage'));
```

### 2. Shared State

```typescript
// Zustand stores are shared across remotes
import { useThemeStore } from './store/themeStore';
import { useAppStore } from './store/appStore';
```

### 3. Type Declarations

```typescript
// host/src/remotes.d.ts
declare module 'productsApp/ProductsPage' {
  const ProductsPage: React.ComponentType;
  export default ProductsPage;
}
```

## 📝 Adding New Remotes

1. Create new app in `remotes/` folder
2. Configure `vite.config.ts` with federation plugin
3. Expose components in `exposes` config
4. Add remote URL to host's `vite.config.ts`
5. Add TypeScript declaration to `host/src/remotes.d.ts`
6. Import and use in host app

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| "Failed to fetch remoteEntry.js" | Start all remotes in preview mode |
| Changes not showing | Rebuild remote: `npm run build` |
| Port already in use | Kill process or change port in vite.config.ts |
| Module not found | Check remote is running and URL is correct |

## 📚 Learn More

- [Module Federation Docs](https://webpack.js.org/concepts/module-federation/)
- [Vite Plugin Federation](https://github.com/originjs/vite-plugin-federation)
- [Material-UI](https://mui.com/)
- [Zustand](https://github.com/pmndrs/zustand)
- [React Router](https://reactrouter.com/)
- [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)

## 🎨 Web Components

Each remote can be packaged as a standalone Web Component for use in ANY framework:

```bash
# Build web components
.\build-webcomponents.ps1

# Use anywhere - React, Vue, Angular, WordPress, etc.
<products-widget theme="light"></products-widget>
<script type="module" src="./products-widget.js"></script>
```

**Full guide:** [WEB_COMPONENTS.md](WEB_COMPONENTS.md)  
**Examples:** `examples/webcomponent-example.html`

## 📄 Documentation

| File | Description |
|------|-------------|
| [README.md](README.md) | Complete project overview (you are here) |
| [QUICKSTART.md](QUICKSTART.md) | Quick setup and running guide |
| [WEB_COMPONENTS.md](WEB_COMPONENTS.md) | Web Component integration guide |

## 📝 License

MIT - Feel free to use for learning and development.

---

**Built with ❤️ using Module Federation, React, Material-UI, and Web Components**

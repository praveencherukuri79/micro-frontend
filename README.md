# Module Federation Store

Modern e-commerce application demonstrating **dual-mode micro-frontend architecture** with Module Federation and Web Components.

## 🎯 Overview

A complete setup where each remote component works in **TWO ways** from a single codebase:

| Mode | Use Case | Integration |
|------|----------|-------------|
| **Module Federation** | React micro-frontends | `import('remoteApp/Component')` |
| **Web Component** | ANY framework | `<products-widget>` HTML tag |

**Applications:**
- **Host** (Port 5000) - Main React app
- **Shell** (Port 5003) - Header & Footer components
- **Products** (Port 5001) - Product catalog
- **Contact** (Port 5002) - Contact form

## 🚀 Quick Start

### Module Federation Mode

```powershell
# Instant start (if already built)
.\start.ps1

# With auto-rebuild (recommended for development)
.\start-watch.ps1

# Build first, then start
.\start-preview.ps1
```

Open **http://localhost:5000**

### Web Component Mode

```powershell
# Build all web components
.\build-webcomponents.ps1
```

Then open `examples/webcomponent-example.html` or integrate into any app:

```html
<products-widget theme="light"></products-widget>
<script type="module" src="./products-widget.js"></script>
```

## 📁 Project Structure

```
module-federation/
├── host/                    # Main application (Port 5000)
├── remotes/
│   ├── shell/              # Header/Footer (Port 5003)
│   ├── products/           # Products page (Port 5001)
│   └── contact/            # Contact page (Port 5002)
├── examples/               # Web Component examples
├── start*.ps1              # Development scripts
└── *.md                    # Documentation
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
  shared: ['react', 'react-dom', '@mui/material', 'zustand'],
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

- ✅ **Dual-mode** - Module Federation + Web Components
- ✅ **React 18 + TypeScript** - Modern React with type safety
- ✅ **Material-UI** - Beautiful, responsive components
- ✅ **Vite** - Lightning-fast builds
- ✅ **Zustand** - Lightweight state management
- ✅ **Light/Dark Theme** - Toggle across all modules
- ✅ **React Router** - Client-side navigation
- ✅ **Auto-rebuild** - Watch mode for development
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

## 🔧 Development

### Requirements

- Node.js 18+
- npm or yarn

### Install Dependencies

```bash
# Install in each app
cd host && npm install
cd ../remotes/shell && npm install
cd ../products && npm install
cd ../contact && npm install
```

### Development Workflow

**With auto-rebuild (recommended):**

```powershell
.\start-watch.ps1
```

- Edit host files → Auto reload ✅
- Edit remote files → Auto rebuild → Refresh browser 🔄

**Manual mode:**

```powershell
# Remotes in preview mode
cd remotes/shell && npm run preview
cd ../products && npm run preview
cd ../contact && npm run preview

# Host in dev mode
cd host && npm run dev
```

## 🛠️ Building

### Module Federation

```bash
# Build all
cd host && npm run build
cd ../remotes/shell && npm run build
cd ../products && npm run build
cd ../contact && npm run build
```

### Web Components

```bash
# Build all web components
cd remotes/shell && npm run build:webcomponent
cd ../products && npm run build:webcomponent
cd ../contact && npm run build:webcomponent
```

Or use the script:

```powershell
.\build-webcomponents.ps1
```

## 🎨 Web Components

Each remote can be packaged as a standalone Web Component:

```html
<!-- Use in ANY framework -->
<products-widget theme="light"></products-widget>
<script type="module" src="./products-widget.js"></script>
```

**Available widgets:**
- `<products-widget>` - Product catalog
- `<contact-widget>` - Contact form
- `<shell-widget>` - Header/Footer

**See [WEB_COMPONENTS.md](WEB_COMPONENTS.md) for full integration guide.**

## 📚 Documentation

| File | Description |
|------|-------------|
| [README.md](README.md) | This file - project overview |
| [QUICKSTART.md](QUICKSTART.md) | Quick setup and running guide |
| [WEB_COMPONENTS.md](WEB_COMPONENTS.md) | Web Component integration |
| [ARCHITECTURE.md](ARCHITECTURE.md) | System architecture |

## 🎯 Use Cases

### Module Federation Mode
- Building React micro-frontends
- Multiple teams, independent deployment
- Shared state and dependencies
- Runtime integration

### Web Component Mode
- Integrate into WordPress, Shopify
- Use in Vue, Angular, Svelte apps
- Embed in marketing sites
- Framework-agnostic distribution
- Provide to third-party developers

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| "Failed to fetch remoteEntry.js" | Start all remotes first |
| Changes not showing | Rebuild remote: `npm run build` |
| Port already in use | Kill process or change port |
| Module not found | Check remote is running and URL is correct |

## 🚀 Deployment

### Module Federation

1. Build all apps: `npm run build` in each
2. Deploy to CDN/hosting
3. Update host config with production URLs

### Web Components

1. Build: `npm run build:webcomponent` in each remote
2. Deploy `dist-webcomponent/` folder to CDN
3. Use via `<script>` tag anywhere

## 📖 Learn More

- [Module Federation Docs](https://webpack.js.org/concepts/module-federation/)
- [Vite Plugin Federation](https://github.com/originjs/vite-plugin-federation)
- [Material-UI](https://mui.com/)
- [Zustand](https://github.com/pmndrs/zustand)
- [React Router](https://reactrouter.com/)
- [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)

## 📝 License

MIT - Feel free to use for learning and development.

---

**Built with ❤️ using Module Federation, React, Material-UI, and Web Components**

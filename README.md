# Module Federation Store

Modern e-commerce application demonstrating **dual-mode micro-frontend architecture** with Module Federation and Web Components.

## 🎯 Overview

A complete setup where each remote component works in **TWO ways** from a single codebase:

| Mode                  | Use Case              | Integration                     |
| --------------------- | --------------------- | ------------------------------- |
| **Module Federation** | React micro-frontends | `import('remoteApp/Component')` |
| **Web Component**     | ANY framework         | `<products-widget>` HTML tag    |

**Host Applications:**

- **Host** (Port 5000) - Module Federation host app
- **Host-WebComponent** (Port 5100) - Web Components host app

**Remote Applications:**

- **Shell** (Port 5003) - React - Header & Footer components
- **Products** (Port 5001) - React - Product catalog showcase
- **Contact** (Port 5002) - React - Contact form implementation
- **Angular-Webpack** (Port 5004) - Angular 17 + Webpack - Data dashboard remote
- **Angular-Vite** (Port 5006) - Angular + Vite (experimental) - Data dashboard remote
- **Vue** (Port 5005) - Vue 3 - Settings & configuration remote

## 🚀 Quick Start

### Module Federation Mode

```powershell
# First time: Install dependencies
.\scripts\utils-install-all.ps1

# Quick start (if already built)
.\scripts\mf-start-quick.ps1

# Watch mode (auto-rebuild on file change) - RECOMMENDED
.\scripts\mf-start-watch.ps1

# Production preview mode (build first, then start)
.\scripts\mf-start-preview.ps1
```

Open **http://localhost:5000**

### Web Component Mode

```powershell
# Complete workflow: build, copy, and start
.\scripts\wc-start.ps1

# Quick start (if already built)
.\scripts\wc-start-quick.ps1
```

Open **http://localhost:5010**

**Full workflow (`wc-start.ps1`):**

- Builds all remotes as web components in parallel
- Copies widgets to central `widgets/` directory
- Starts the web component host application

**Quick start (`wc-start-quick.ps1`):**

- Just starts the host (no build, no copy)
- Use when widgets are already built

```html
<!-- React Remote as Web Component -->
<products-widget theme="light"></products-widget>
<script type="module" src="./products-widget.js"></script>

<!-- Angular Remote as Web Component -->
<angular-widget theme="dark"></angular-widget>
<script type="module" src="./angular-widget.js"></script>

<!-- Vue Remote as Web Component -->
<vue-widget theme="light"></vue-widget>
<script type="module" src="./vue-widget.js"></script>
```

## 📁 Project Structure

```
module-federation/
├── host/                    # Main MF host (Port 5000)
├── host-webcomponent/       # Web Component host (Port 5010)
├── remotes/
│   ├── shell/              # React + Vite (Port 5003)
│   │   ├── .config/        # Build configurations separated
│   │   │   ├── module-federation/  # MF config
│   │   │   └── webcomponent/       # WC config
│   │   └── src/            # Source code
│   ├── products/           # React + Vite (Port 5001)
│   ├── contact/            # React + Vite (Port 5002)
│   ├── angular-webpack/    # Angular + Webpack (Port 5004)
│   ├── angular-vite/       # Angular + Vite (Port 5006)
│   └── vue/                # Vue + Vite (Port 5005)
├── scripts/                # Automation scripts
│   ├── mf-*.ps1           # Module Federation scripts
│   ├── wc-*.ps1           # Web Component scripts
│   └── utils-*.ps1        # Utility scripts
├── widgets/                # Built web components (generated)
└── *.md                    # Documentation
```

## 🏗️ Module Federation Setup

### Host Configuration

```typescript
// host/vite.config.ts
federation({
  name: "host-app",
  remotes: {
    shellApp: "http://localhost:5003/assets/remoteEntry.js",
    productsApp: "http://localhost:5001/assets/remoteEntry.js",
    contactApp: "http://localhost:5002/assets/remoteEntry.js",
    angularApp: "http://localhost:5004/remoteEntry.js", // Webpack (no /assets/)
    vueApp: "http://localhost:5005/assets/remoteEntry.js",
  },
  shared: ["react", "react-dom", "@mui/material", "zustand"],
});
```

### Remote Configuration

```typescript
// remotes/products/vite.config.ts
federation({
  name: "productsApp",
  filename: "remoteEntry.js",
  exposes: {
    "./ProductsPage": "./src/ProductsPage",
  },
  shared: ["react", "react-dom", "@mui/material", "zustand"],
});
```

## 🎨 Features

- ✅ **Dual-mode Architecture** - Module Federation + Web Components
- ✅ **Multi-framework** - React 18, Angular 17, Vue 3
- ✅ **TypeScript Everywhere** - Full type safety across all remotes
- ✅ **Material-UI** - Beautiful, responsive React components
- ✅ **RxJS + Pinia** - State management for Angular/Vue
- ✅ **Vite** - Lightning-fast builds for all frameworks
- ✅ **Light/Dark Theme** - Consistent theming across all remotes
- ✅ **React Router** - Client-side navigation
- ✅ **Auto-rebuild** - Watch mode with parallel builds
- ✅ **Error Boundaries** - Graceful error handling
- ✅ **Clean Architecture** - Separated HTML/CSS/TS for maintainability

## 📦 Tech Stack

| Technology                       | Version | Purpose                         |
| -------------------------------- | ------- | ------------------------------- |
| **Frameworks**                   |
| React                            | 18.3    | Host + 3 React remotes          |
| Angular                          | 17.3    | Angular remote (data dashboard) |
| Vue                              | 3.4     | Vue remote (settings page)      |
| **Core Tools**                   |
| TypeScript                       | 5.9     | Type safety across all remotes  |
| Vite                             | 5.4     | Build tool for all applications |
| @originjs/vite-plugin-federation | 1.4     | Module Federation support       |
| **React Ecosystem**              |
| Material-UI                      | 5.18    | UI Components (React remotes)   |
| Zustand                          | 4.5     | State management (React)        |
| React Router                     | 6.30    | Client-side routing             |
| **Angular Ecosystem**            |
| RxJS                             | 7.8     | State management (Angular)      |
| Zone.js                          | 0.15    | Change detection (Angular)      |
| **Vue Ecosystem**                |
| Pinia                            | 2.1     | State management (Vue)          |

## 🔧 Development

### Requirements

- Node.js 18+
- npm or yarn

### Install Dependencies

```powershell
# Fast parallel install for all 6 apps (recommended)
.\install-all.ps1

# Or manually in each app
cd host && npm install
cd ../remotes/shell && npm install
cd ../products && npm install
cd ../contact && npm install
cd ../angular && npm install
cd ../vue && npm install
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

```powershell
# Build all (parallel builds with start-preview.ps1)
.\start-preview.ps1

# Or manually
cd host && npm run build
cd ../remotes/shell && npm run build
cd ../products && npm run build
cd ../contact && npm run build
cd ../angular && npm run build
cd ../vue && npm run build
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

| File                                   | Description                   |
| -------------------------------------- | ----------------------------- |
| [README.md](README.md)                 | This file - project overview  |
| [QUICKSTART.md](QUICKSTART.md)         | Quick setup and running guide |
| [WEB_COMPONENTS.md](WEB_COMPONENTS.md) | Web Component integration     |
| [ARCHITECTURE.md](ARCHITECTURE.md)     | System architecture           |

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

| Problem                          | Solution                                   |
| -------------------------------- | ------------------------------------------ |
| "Failed to fetch remoteEntry.js" | Start all remotes first                    |
| Changes not showing              | Rebuild remote: `npm run build`            |
| Port already in use              | Kill process or change port                |
| Module not found                 | Check remote is running and URL is correct |

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

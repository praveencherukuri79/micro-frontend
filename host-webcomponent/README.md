# Host Web Component Application

This is an alternative host application that integrates all remotes using **Web Components** instead of Module Federation.

## Architecture

- **Framework**: React 18 + TypeScript + Vite
- **UI Library**: Material-UI (MUI)
- **State Management**: Zustand
- **Routing**: React Router v6
- **Integration Method**: Native Web Components (Custom Elements)

## Web Components Used

All remotes are loaded as custom elements:

1. `<shell-widget>` - Header and Footer components
2. `<products-widget>` - Products catalog
3. `<contact-widget>` - Contact form
4. `<angular-webpack-widget>` - Angular Webpack remote
5. `<angular-vite-widget>` - Angular Vite remote
6. `<vue-widget>` - Vue remote

## Running the Application

### Quick Start

From the project root, run:

```powershell
.\start-webcomponents.ps1
```

This script will:

1. Build all remote web components in parallel
2. Copy the built widgets to `public/widgets/`
3. Start the host application on `http://localhost:5100`

### Manual Start

1. **Build all web components** (from project root):

   ```powershell
   npm run build:webcomponent --prefix remotes/shell
   npm run build:webcomponent --prefix remotes/products
   npm run build:webcomponent --prefix remotes/contact
   npm run build:webcomponent --prefix remotes/angular-webpack
   npm run build:webcomponent --prefix remotes/angular-vite
   npm run build:webcomponent --prefix remotes/vue
   ```

2. **Copy widgets to public folder**:
   Copy all `.js` files from `remotes/*/dist-webcomponent/` to `host-webcomponent/public/widgets/`

3. **Install and run**:
   ```bash
   cd host-webcomponent
   npm install
   npm run dev
   ```

## Features

- ✅ Dynamic web component loading
- ✅ Theme synchronization across all widgets
- ✅ Cart state management
- ✅ React Router integration
- ✅ Loading states
- ✅ Error handling
- ✅ TypeScript support for custom elements

## Comparison with Module Federation Host

| Feature             | Module Federation         | Web Components          |
| ------------------- | ------------------------- | ----------------------- |
| **Port**            | 5000                      | 5100                    |
| **Runtime**         | Webpack/Vite Federation   | Native Browser APIs     |
| **Bundle Sharing**  | Yes (shared dependencies) | No (isolated bundles)   |
| **Type Safety**     | Partial                   | Custom type definitions |
| **Browser Support** | Modern browsers           | Modern browsers         |
| **Complexity**      | Higher                    | Lower                   |
| **Loading**         | Async chunk loading       | Script tag loading      |

## Advantages of Web Components Approach

1. **Framework Agnostic**: True isolation, no dependency conflicts
2. **Simplicity**: No Module Federation configuration needed
3. **Standard Browser APIs**: Uses native Custom Elements API
4. **Easy Integration**: Works with any framework or vanilla JS
5. **Versioning**: Each widget can have independent versioning

## Disadvantages

1. **No Dependency Sharing**: Larger bundle sizes (duplicated React, MUI, etc.)
2. **No Type Safety**: TypeScript types need manual definitions
3. **Communication**: Requires custom events for widget communication
4. **Initial Load**: All widgets need to be downloaded upfront

## Port

The application runs on **port 5100** to avoid conflicts with the Module Federation host (port 5000).

## Development

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

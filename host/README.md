# Host Application

The main host application that orchestrates the micro-frontend architecture.

## Features

- **Module Federation Host**: Loads and integrates remote modules
- **Routing**: React Router for navigation between pages
- **Theme Management**: Light/Dark mode with MUI theming
- **State Management**: Zustand stores for shared state
- **Layout Components**: Header and Footer shared across the app

## Key Files

- `vite.config.ts`: Module Federation configuration
- `src/App.tsx`: Main app component with routing
- `src/store/`: Zustand stores (theme, app state)
- `src/theme/`: MUI theme configuration
- `src/components/`: Shared UI components
- `src/remotes.d.ts`: TypeScript declarations for remote modules

## Remote Modules

This host consumes:
- **productsApp**: Products listing and management
- **contactApp**: Contact form and information

## Development

```bash
npm install
npm run dev
```

Runs on http://localhost:5000

**Note:** Remote applications must be running on ports 5001 and 5002 for the host to function properly.


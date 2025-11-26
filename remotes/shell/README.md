# Shell Remote Application

A remote micro-frontend that provides shared layout components (Header and Footer).

## Features

- **Header Component**: Navigation bar with theme toggle and cart counter
- **Footer Component**: Company information and links
- **Standalone Mode**: Can run independently for development

## Exposed Modules

- `./Header`: Navigation header component
- `./Footer`: Page footer component

## Development

```bash
npm install
npm run dev
```

Runs on http://localhost:5003

Can be accessed:
- Standalone: http://localhost:5003
- Via Host: Integrated into all pages

## Module Federation Config

```typescript
exposes: {
  './Header': './src/components/Header',
  './Footer': './src/components/Footer',
}
```

## Props

### Header
- `themeMode` (optional): 'light' | 'dark' - Current theme mode
- `cartCount` (optional): number - Number of items in cart
- `onToggleTheme` (optional): () => void - Theme toggle callback
- `onNavigate` (optional): (path: string) => void - Navigation callback

### Footer
No props required - fully self-contained component.


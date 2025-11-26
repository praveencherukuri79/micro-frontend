# Products Remote Application

A remote micro-frontend that provides product catalog functionality.

## Features

- **Product Grid**: Responsive product listing
- **Search & Filter**: Find products by name and category
- **Product Cards**: Beautiful product displays with images and ratings
- **Add to Cart**: Shopping cart integration
- **Standalone Mode**: Can run independently for development

## Exposed Modules

- `./ProductsPage`: Main products page component

## Development

```bash
npm install
npm run dev
```

Runs on http://localhost:5001

Can be accessed:
- Standalone: http://localhost:5001
- Via Host: http://localhost:5000/products

## Module Federation Config

```typescript
exposes: {
  './ProductsPage': './src/ProductsPage',
}
```

This module can be consumed by any Module Federation host configured to load from this remote.


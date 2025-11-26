import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'productsApp',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductsPage': './src/ProductsPage',
      },
      shared: ['react', 'react-dom', '@mui/material', '@emotion/react', '@emotion/styled', 'zustand'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5001,
  },
});


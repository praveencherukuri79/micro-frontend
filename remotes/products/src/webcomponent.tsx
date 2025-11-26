import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import ProductsPage from './ProductsPage';
import {
  ThemeMode,
  getThemeMode,
  registerWebComponent,
  unmountReactRoot,
} from './utils/webComponent';

class ProductsWebComponent extends HTMLElement {
  private root: ReactDOM.Root | null = null;
  private themeMode: ThemeMode = 'light';

  static get observedAttributes() {
    return ['theme'];
  }

  connectedCallback() {
    this.mount();
  }

  disconnectedCallback() {
    unmountReactRoot(this.root);
    this.root = null;
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === 'theme' && oldValue !== newValue) {
      this.themeMode = getThemeMode(newValue);
      this.mount();
    }
  }

  private mount() {
    if (this.root) {
      this.root.unmount();
    }

    this.innerHTML = '';
    const mountPoint = document.createElement('div');
    this.appendChild(mountPoint);

    const theme = createTheme({ palette: { mode: this.themeMode } });

    this.root = ReactDOM.createRoot(mountPoint);
    this.root.render(
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ProductsPage />
        </ThemeProvider>
      </React.StrictMode>
    );
  }
}

registerWebComponent('products-widget', ProductsWebComponent);

export default ProductsWebComponent;

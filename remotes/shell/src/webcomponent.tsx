import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

class ShellWebComponent extends HTMLElement {
  private root: ReactDOM.Root | null = null;
  private themeMode: 'light' | 'dark' = 'light';
  private cartCount: number = 0;
  private component: 'header' | 'footer' = 'header';

  static get observedAttributes() {
    return ['theme', 'cart-count', 'component'];
  }

  connectedCallback() {
    this.mount();
  }

  disconnectedCallback() {
    this.unmount();
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue === newValue) return;

    switch (name) {
      case 'theme':
        this.themeMode = newValue as 'light' | 'dark';
        break;
      case 'cart-count':
        this.cartCount = parseInt(newValue, 10) || 0;
        break;
      case 'component':
        this.component = (newValue as 'header' | 'footer') || 'header';
        break;
    }
    
    this.mount();
  }

  private mount() {
    // Clear previous content
    if (this.root) {
      this.root.unmount();
    }
    
    this.innerHTML = '';
    const mountPoint = document.createElement('div');
    this.appendChild(mountPoint);

    const theme = createTheme({
      palette: { mode: this.themeMode },
    });

    const handleThemeToggle = () => {
      this.dispatchEvent(new CustomEvent('theme-toggle', {
        bubbles: true,
        composed: true,
      }));
    };

    const handleNavigate = (path: string) => {
      this.dispatchEvent(new CustomEvent('navigate', {
        detail: { path },
        bubbles: true,
        composed: true,
      }));
    };

    this.root = ReactDOM.createRoot(mountPoint);
    this.root.render(
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {this.component === 'header' ? (
            <Header
              themeMode={this.themeMode}
              cartCount={this.cartCount}
              onToggleTheme={handleThemeToggle}
              onNavigate={handleNavigate}
            />
          ) : (
            <Footer />
          )}
        </ThemeProvider>
      </React.StrictMode>
    );
  }

  private unmount() {
    if (this.root) {
      this.root.unmount();
      this.root = null;
    }
  }
}

// Register the custom elements
if (!customElements.get('shell-widget')) {
  customElements.define('shell-widget', ShellWebComponent);
}

export default ShellWebComponent;


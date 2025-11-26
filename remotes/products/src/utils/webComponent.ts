import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';

type ThemeMode = 'light' | 'dark';

export const isValidThemeMode = (mode: string): mode is ThemeMode => {
  return mode === 'light' || mode === 'dark';
};

export const getThemeMode = (mode: string | null | undefined): ThemeMode => {
  return mode && isValidThemeMode(mode) ? mode : 'light';
};

export abstract class WebComponentBase extends HTMLElement {
  protected root: ReactDOM.Root | null = null;
  protected themeMode: ThemeMode = 'light';

  static get observedAttributes(): string[] {
    return ['theme'];
  }

  connectedCallback(): void {
    try {
      this.mount();
    } catch (error) {
      console.error('Error mounting web component:', error);
      this.showError();
    }
  }

  disconnectedCallback(): void {
    this.unmount();
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string): void {
    if (name === 'theme' && oldValue !== newValue) {
      this.themeMode = getThemeMode(newValue);
      try {
        this.mount();
      } catch (error) {
        console.error('Error updating web component:', error);
      }
    }
  }

  protected mount(): void {
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
          {this.renderComponent()}
        </ThemeProvider>
      </React.StrictMode>
    );
  }

  protected unmount(): void {
    if (this.root) {
      this.root.unmount();
      this.root = null;
    }
  }

  protected showError(): void {
    this.innerHTML = `
      <div style="padding: 20px; border: 1px solid #f44336; border-radius: 4px; background: #ffebee; color: #c62828;">
        <strong>Error Loading Component</strong>
        <p>Failed to load component. Please refresh the page.</p>
      </div>
    `;
  }

  protected abstract renderComponent(): React.ReactElement;
}

export const registerWebComponent = (
  tagName: string,
  elementClass: CustomElementConstructor
): void => {
  if (!customElements.get(tagName)) {
    customElements.define(tagName, elementClass);
  }
};


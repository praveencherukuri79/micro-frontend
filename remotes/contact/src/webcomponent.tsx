import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import ContactPage from './ContactPage';

class ContactWebComponent extends HTMLElement {
  private root: ReactDOM.Root | null = null;
  private themeMode: 'light' | 'dark' = 'light';

  static get observedAttributes() {
    return ['theme'];
  }

  connectedCallback() {
    this.mount();
  }

  disconnectedCallback() {
    this.unmount();
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === 'theme' && oldValue !== newValue) {
      this.themeMode = newValue as 'light' | 'dark';
      this.mount();
    }
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

    this.root = ReactDOM.createRoot(mountPoint);
    this.root.render(
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ContactPage />
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

// Register the custom element
if (!customElements.get('contact-widget')) {
  customElements.define('contact-widget', ContactWebComponent);
}

export default ContactWebComponent;


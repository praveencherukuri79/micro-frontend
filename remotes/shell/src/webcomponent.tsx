import React from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { WebComponentBase, registerWebComponent, getThemeMode } from './utils/webComponent';

class ShellWebComponent extends WebComponentBase {
  private cartCount: number = 0;
  private component: 'header' | 'footer' = 'header';

  static get observedAttributes(): string[] {
    return ['theme', 'cart-count', 'component'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string): void {
    if (oldValue === newValue) return;

    switch (name) {
      case 'theme':
        this.themeMode = getThemeMode(newValue);
        break;
      case 'cart-count':
        this.cartCount = parseInt(newValue, 10) || 0;
        break;
      case 'component':
        this.component = (newValue as 'header' | 'footer') || 'header';
        break;
    }

    try {
      this.mount();
    } catch (error) {
      console.error('Error updating shell component:', error);
    }
  }

  protected renderComponent(): React.ReactElement {
    const handleThemeToggle = () => {
      this.dispatchEvent(
        new CustomEvent('theme-toggle', {
          bubbles: true,
          composed: true,
        })
      );
    };

    const handleNavigate = (path: string) => {
      this.dispatchEvent(
        new CustomEvent('navigate', {
          detail: { path },
          bubbles: true,
          composed: true,
        })
      );
    };

    return this.component === 'header' ? (
      <Header
        themeMode={this.themeMode}
        cartCount={this.cartCount}
        onToggleTheme={handleThemeToggle}
        onNavigate={handleNavigate}
      />
    ) : (
      <Footer />
    );
  }
}

registerWebComponent('shell-widget', ShellWebComponent);

export default ShellWebComponent;

import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import 'zone.js';
import { AppComponent } from './components/app/app.component';

/**
 * Angular Web Component Entry Point (Webpack)
 * Uses @angular/elements to create a proper custom element
 */

// Create and register the custom element immediately (synchronously)
class AngularWebpackElement extends HTMLElement {
  private _initialized = false;

  connectedCallback() {
    if (this._initialized) return;
    this._initialized = true;

    // Bootstrap Angular when the element is connected
    createApplication({
      providers: [],
    })
      .then((appRef) => {
        const injector = appRef.injector;
        const WebComponentClass = createCustomElement(AppComponent, {
          injector,
        });

        // Replace ourselves with the actual Angular custom element
        const angularElement = new WebComponentClass();

        // Copy attributes
        for (let i = 0; i < this.attributes.length; i++) {
          const attr = this.attributes[i];
          angularElement.setAttribute(attr.name, attr.value);
        }

        // Replace in DOM
        if (this.parentNode) {
          this.parentNode.replaceChild(angularElement, this);
        }

        console.log('Angular Webpack widget bootstrapped');
      })
      .catch((err) => {
        console.error('Angular Webpack web component bootstrap error:', err);
        this.innerHTML = `<div style="padding:2rem;background:#ffebee;border:1px solid #f44336;border-radius:8px;color:#c62828;">
          <h3 style="margin:0 0 .5rem 0;">Error Loading Angular Remote</h3>
          <p style="margin:0;">${
            err instanceof Error ? err.message : 'Unknown error'
          }</p>
        </div>`;
      });
  }
}

// Register the element immediately (synchronously)
if (!customElements.get('angular-webpack-widget')) {
  customElements.define('angular-webpack-widget', AngularWebpackElement);
  console.log('Angular Webpack widget registered');
}

import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import 'zone.js';
import { AppComponent } from './components/app/app.component';
import { ApiService } from './services/api.service';
import { createErrorElement } from './utils/errorFallback';

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

    const apiBasePath =
      this.getAttribute('api-base-path') || window.location.origin;

    // Bootstrap Angular when the element is connected
    createApplication({
      providers: [],
    })
      .then((appRef) => {
        const injector = appRef.injector;

        // Set API base path
        const apiService = injector.get(ApiService);
        apiService.setBasePath(apiBasePath);

        const WebComponentClass = createCustomElement(AppComponent, {
          injector,
        });

        // Register the internal element with a unique name
        const internalTagName = `angular-webpack-internal-${Date.now()}`;
        if (!customElements.get(internalTagName)) {
          customElements.define(internalTagName, WebComponentClass);
        }

        // Create the element using document.createElement (Safe way)
        const angularElement = document.createElement(internalTagName);

        // Copy attributes
        for (let i = 0; i < this.attributes.length; i++) {
          const attr = this.attributes[i];
          angularElement.setAttribute(attr.name, attr.value);
        }

        // Append to this element (acting as a wrapper)
        this.appendChild(angularElement);

        console.log('Angular Webpack widget bootstrapped');
        console.log(`API base path: ${apiBasePath}`);
      })
      .catch((err) => {
        console.error('Angular Webpack web component bootstrap error:', err);
        const errorMessage =
          err instanceof Error ? err.message : 'Unknown error';
        const details = err instanceof Error ? err.stack : undefined;
        this.innerHTML = '';
        this.appendChild(
          createErrorElement(
            'Error Loading Angular Remote',
            errorMessage,
            details
          )
        );
      });
  }
}

// Register the element immediately (synchronously)
if (!customElements.get('angular-webpack-widget')) {
  customElements.define('angular-webpack-widget', AngularWebpackElement);
  console.log('Angular Webpack widget registered');
}

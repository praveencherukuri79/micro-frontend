import { Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import 'zone.js';
import { AppComponent } from './components/app/app.component';

/**
 * Angular Web Component Entry Point (Webpack)
 * Uses @angular/elements - the proper Angular way
 */

// Bootstrap Angular application first
createApplication({ providers: [] })
  .then((app) => {
    const injector: Injector = app.injector;

    // Convert Angular component to Custom Element
    const AngularWebpackElement = createCustomElement(AppComponent, {
      injector,
    });

    // Register the custom element
    if (!customElements.get('angular-webpack-widget')) {
      customElements.define('angular-webpack-widget', AngularWebpackElement);
    }
  })
  .catch((err) => {
    console.error('[Angular Webpack] Failed to register widget:', err);
  });

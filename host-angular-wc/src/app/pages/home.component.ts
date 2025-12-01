import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="home-page">
      <h2>Welcome to Angular WC Host</h2>
      <p>This is the Web Component host application built with Angular.</p>
      
      <div class="info-card">
        <h3>Available Web Components</h3>
        <p>Web components are loaded on-demand when you navigate to their pages.</p>
        <ul>
          <li><a routerLink="/products">Products Widget</a></li>
          <li><a routerLink="/contact">Contact Widget</a></li>
        </ul>
      </div>
      
      <div class="info-card">
        <h3>How it works</h3>
        <ol>
          <li>Web component scripts are loaded from /widgets/</li>
          <li>Custom elements are registered automatically</li>
          <li>Angular renders the custom element tags</li>
          <li>Theme is passed via attributes to web components</li>
        </ol>
      </div>
    </div>
  `,
  styles: [
    `
      .home-page {
        max-width: 800px;
        margin: 0 auto;
      }
      .info-card {
        background: #f5f5f5;
        border-radius: 8px;
        padding: 1.5rem;
        margin-top: 2rem;
      }
      :host-context(.dark-theme) .info-card {
        background: #2d2d2d;
      }
      ul, ol {
        margin-top: 1rem;
        padding-left: 1.5rem;
      }
      li {
        padding: 0.5rem 0;
      }
      a {
        color: var(--primary-color);
      }
    `,
  ],
})
export class HomeComponent {}


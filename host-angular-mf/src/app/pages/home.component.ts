import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="home-page">
      <h2>Welcome to Angular MF Host</h2>
      <p>This is the Module Federation host application built with Angular.</p>
      
      <div class="info-card">
        <h3>Available Remotes</h3>
        <p>Configure your remote applications in webpack.config.js</p>
        <ul>
          <li>Products Remote - Port 5001</li>
          <li>Contact Remote - Port 5002</li>
          <li>Shell Remote - Port 5003</li>
          <li>Angular Webpack Remote - Port 5004</li>
          <li>Vue Remote - Port 5005</li>
          <li>Angular Vite Remote - Port 5006</li>
        </ul>
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
      .dark-theme .info-card {
        background: #2d2d2d;
      }
      ul {
        list-style: none;
        padding: 0;
        margin-top: 1rem;
      }
      li {
        padding: 0.5rem 0;
        border-bottom: 1px solid #ddd;
      }
    `,
  ],
})
export class HomeComponent {}


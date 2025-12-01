import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-container" [class.dark-theme]="isDarkTheme">
      <header class="header">
        <h1>Angular MF Host</h1>
        <nav>
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
          <!-- Add more navigation links for remotes -->
        </nav>
        <button (click)="toggleTheme()">
          {{ isDarkTheme ? '☀️ Light' : '🌙 Dark' }}
        </button>
      </header>
      <main class="main-content">
        <router-outlet></router-outlet>
      </main>
      <footer class="footer">
        <p>Angular Module Federation Host - Port 5007</p>
      </footer>
    </div>
  `,
  styles: [
    `
      .app-container {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
      }
      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 2rem;
        background: var(--primary-color);
        color: white;
      }
      .header nav a {
        color: white;
        text-decoration: none;
        margin: 0 1rem;
      }
      .header nav a.active {
        text-decoration: underline;
      }
      .main-content {
        flex: 1;
        padding: 2rem;
      }
      .footer {
        padding: 1rem 2rem;
        text-align: center;
        background: #f5f5f5;
      }
      .dark-theme .footer {
        background: #1e1e1e;
      }
    `,
  ],
})
export class AppComponent {
  isDarkTheme = false;

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    document.body.classList.toggle('dark-theme', this.isDarkTheme);
    document.body.classList.toggle('light-theme', !this.isDarkTheme);
  }
}


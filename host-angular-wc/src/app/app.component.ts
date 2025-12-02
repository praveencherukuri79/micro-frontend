import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ThemeService, ThemeMode } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  shellLoaded = false;
  currentTheme: ThemeMode = 'light';
  cartCount = 0;
  private themeSubscription?: Subscription;

  constructor(
    private themeService: ThemeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.themeService.initTheme();
    this.themeSubscription = this.themeService.theme$.subscribe(theme => {
      this.currentTheme = theme;
      this.updateShellTheme();
    });
    this.loadShellWidget();
  }

  ngOnDestroy(): void {
    this.themeSubscription?.unsubscribe();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  private async loadShellWidget(): Promise<void> {
    try {
      // Check if already registered
      if (customElements.get('shell-widget')) {
        this.shellLoaded = true;
        return;
      }

      const script = document.createElement('script');
      script.src = '/widgets/shell-widget.js';
      script.type = 'module';

      await new Promise<void>((resolve, reject) => {
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Failed to load shell widget'));
        document.head.appendChild(script);
      });

      await customElements.whenDefined('shell-widget');
      this.shellLoaded = true;
      
      // Set up event listeners
      this.setupShellEventListeners();
    } catch (err) {
      console.error('Error loading shell widget:', err);
    }
  }

  private setupShellEventListeners(): void {
    // Listen for theme toggle from shell widget
    document.addEventListener('theme-toggle', () => {
      this.themeService.toggleTheme();
    });

    // Listen for navigation from shell widget
    document.addEventListener('navigate', ((event: CustomEvent) => {
      this.router.navigateByUrl(event.detail.path);
    }) as EventListener);
  }

  private updateShellTheme(): void {
    const header = document.querySelector('shell-widget[component="header"]');
    const footer = document.querySelector('shell-widget[component="footer"]');
    
    if (header) {
      header.setAttribute('theme', this.currentTheme);
    }
    if (footer) {
      footer.setAttribute('theme', this.currentTheme);
    }
  }
}

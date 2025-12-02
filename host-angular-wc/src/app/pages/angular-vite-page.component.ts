import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService, ThemeMode } from '../services/theme.service';

@Component({
  selector: 'app-angular-vite-page',
  templateUrl: './angular-vite-page.component.html',
  styleUrls: ['./angular-vite-page.component.css']
})
export class AngularVitePageComponent implements OnInit, OnDestroy {
  loading = true;
  error: string | null = null;
  theme: ThemeMode = 'light';
  private themeSubscription?: Subscription;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeSubscription = this.themeService.theme$.subscribe(theme => {
      this.theme = theme;
      this.updateWidgetTheme();
    });
    this.loadWidget();
  }

  ngOnDestroy(): void {
    this.themeSubscription?.unsubscribe();
  }

  private async loadWidget(): Promise<void> {
    try {
      // Check if already defined
      if (customElements.get('angular-vite-widget')) {
        this.loading = false;
        return;
      }

      const script = document.createElement('script');
      script.src = '/widgets/angular-vite-widget.js';
      script.type = 'module'; // Important for ES modules

      await new Promise<void>((resolve, reject) => {
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Failed to load angular-vite widget'));
        document.head.appendChild(script);
      });

      await customElements.whenDefined('angular-vite-widget');
      this.loading = false;
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Unknown error';
      this.error = errorMsg;
      this.loading = false;
      console.error('Error loading angular-vite widget:', err);
    }
  }

  private updateWidgetTheme(): void {
    const widget = document.querySelector('angular-vite-widget');
    if (widget) {
      widget.setAttribute('theme', this.theme);
    }
  }
}


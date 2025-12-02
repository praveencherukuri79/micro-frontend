import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService, ThemeMode } from '../services/theme.service';

@Component({
  selector: 'app-angular-webpack-page',
  templateUrl: './angular-webpack-page.component.html',
  styleUrls: ['./angular-webpack-page.component.css']
})
export class AngularWebpackPageComponent implements OnInit, OnDestroy {
  loading = true;
  error: string | null = null;
  theme: ThemeMode = 'light';
  apiBasePath = window.location.origin;
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
      if (customElements.get('angular-webpack-widget')) {
        this.loading = false;
        return;
      }

      const script = document.createElement('script');
      script.src = '/widgets/angular-webpack-widget.js';
      script.type = 'module'; // Important for ES modules

      await new Promise<void>((resolve, reject) => {
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Failed to load angular-webpack widget'));
        document.head.appendChild(script);
      });

      await customElements.whenDefined('angular-webpack-widget');
      this.loading = false;
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Unknown error';
      this.error = errorMsg;
      this.loading = false;
      console.error('Error loading angular-webpack widget:', err);
    }
  }

  private updateWidgetTheme(): void {
    const widget = document.querySelector('angular-webpack-widget');
    if (widget) {
      widget.setAttribute('theme', this.theme);
      widget.setAttribute('api-base-path', this.apiBasePath);
    }
  }
}


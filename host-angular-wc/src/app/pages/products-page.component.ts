import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService, ThemeMode } from '../services/theme.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit, OnDestroy {
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
      if (customElements.get('products-widget')) {
        this.loading = false;
        return;
      }

      const script = document.createElement('script');
      script.src = '/widgets/products-widget.js';
      script.type = 'module'; // Important for ES modules

      await new Promise<void>((resolve, reject) => {
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Failed to load products widget'));
        document.head.appendChild(script);
      });

      await customElements.whenDefined('products-widget');
      this.loading = false;
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Unknown error';
      this.error = errorMsg;
      this.loading = false;
      console.error('Error loading products widget:', err);
    }
  }

  private updateWidgetTheme(): void {
    const widget = document.querySelector('products-widget');
    if (widget) {
      widget.setAttribute('theme', this.theme);
    }
  }
}

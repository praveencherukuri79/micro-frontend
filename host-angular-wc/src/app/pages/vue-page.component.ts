import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService, ThemeMode } from '../services/theme.service';

@Component({
  selector: 'app-vue-page',
  templateUrl: './vue-page.component.html',
  styleUrls: ['./vue-page.component.css']
})
export class VuePageComponent implements OnInit, OnDestroy {
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
      if (customElements.get('vue-widget')) {
        this.loading = false;
        return;
      }

      const script = document.createElement('script');
      script.src = '/widgets/vue-widget.js';
      script.type = 'module'; // Important for ES modules

      await new Promise<void>((resolve, reject) => {
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Failed to load vue widget'));
        document.head.appendChild(script);
      });

      await customElements.whenDefined('vue-widget');
      this.loading = false;
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Unknown error';
      this.error = errorMsg;
      this.loading = false;
      console.error('Error loading vue widget:', err);
    }
  }

  private updateWidgetTheme(): void {
    const widget = document.querySelector('vue-widget');
    if (widget) {
      widget.setAttribute('theme', this.theme);
    }
  }
}


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-page',
  template: `
    <div class="page-container">
      <div *ngIf="loading" class="loading">Loading products widget...</div>
      <products-widget 
        *ngIf="!loading"
        [attr.theme]="theme"
        [attr.api-base-path]="apiBasePath">
      </products-widget>
    </div>
  `,
  styles: [
    `
      .page-container {
        min-height: 400px;
      }
      .loading {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 200px;
        color: #666;
        font-style: italic;
      }
    `,
  ],
})
export class ProductsPageComponent implements OnInit {
  loading = true;
  theme = 'light';
  apiBasePath = window.location.origin;

  ngOnInit(): void {
    this.loadWebComponent('/widgets/products-widget.js', 'products-widget');
    this.updateTheme();
  }

  private async loadWebComponent(src: string, tagName: string): Promise<void> {
    // Check if already defined
    if (customElements.get(tagName)) {
      this.loading = false;
      return;
    }

    try {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      
      await new Promise<void>((resolve, reject) => {
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load ${src}`));
        document.head.appendChild(script);
      });

      // Wait for custom element to be defined
      await customElements.whenDefined(tagName);
      this.loading = false;
    } catch (error) {
      console.error('Error loading web component:', error);
      this.loading = false;
    }
  }

  private updateTheme(): void {
    this.theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
  }
}


import { Directive, Input, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appWebComponentLoader]',
})
export class WebComponentLoaderDirective implements OnInit {
  @Input() appWebComponentLoader!: string; // Script source
  @Input() tagName!: string; // Custom element tag name

  constructor(private el: ElementRef) {}

  async ngOnInit(): Promise<void> {
    if (!this.appWebComponentLoader || !this.tagName) {
      console.warn('WebComponentLoader: Missing src or tagName');
      return;
    }

    await this.loadWebComponent(this.appWebComponentLoader, this.tagName);
  }

  private async loadWebComponent(src: string, tagName: string): Promise<void> {
    // Check if already defined
    if (customElements.get(tagName)) {
      return;
    }

    try {
      // Check if script already exists
      const existingScript = document.querySelector(`script[src="${src}"]`);
      if (existingScript) {
        await customElements.whenDefined(tagName);
        return;
      }

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
    } catch (error) {
      console.error('Error loading web component:', error);
    }
  }
}


import {
  ApplicationRef,
  ComponentRef,
  EnvironmentInjector,
  createComponent,
} from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import "zone.js";
import { AppModule } from "./app.module";
import { AppComponent } from "./components/app/app.component";
import { ThemeService } from "./services/theme.service";
import { ApiService } from "./services/api.service";
import { applyThemeVariables, createWebComponentTheme } from "./utils/theme";
import {
  ThemeMode,
  emitCustomEvent,
  getThemeMode,
  registerWebComponent,
} from "./utils/webComponent";
import { createErrorElement } from "./utils/errorFallback";

class AngularWebComponent extends HTMLElement {
  private themeMode: ThemeMode = "light";
  private apiBasePath: string = window.location.origin;
  private mountPoint: HTMLDivElement | null = null;
  private componentRef: ComponentRef<AppComponent> | null = null;
  private moduleRef: any = null;

  static get observedAttributes(): string[] {
    return ["theme", "api-base-path"];
  }

  connectedCallback(): void {
    this.mount();
  }

  disconnectedCallback(): void {
    this.unmount();
  }

  attributeChangedCallback(
    name: string,
    oldValue: string,
    newValue: string
  ): void {
    console.log(`[Angular Vite WC] attributeChangedCallback called:`, {
      name,
      oldValue,
      newValue,
      hasComponentRef: !!this.componentRef,
      hasModuleRef: !!this.moduleRef
    });

    if (name === "theme" && oldValue !== newValue) {
      this.themeMode = getThemeMode(newValue);
      console.log(`[Angular Vite WC] Theme mode updated to: ${this.themeMode}`);
      if (this.componentRef) {
        console.log(`[Angular Vite WC] Calling updateTheme()`);
        this.updateTheme();
      } else {
        console.log(`[Angular Vite WC] Component not mounted yet, skipping theme update`);
      }
    } else if (name === "api-base-path" && oldValue !== newValue) {
      this.apiBasePath = newValue || window.location.origin;
      console.log(`[Angular Vite WC] API base path updated to: ${this.apiBasePath}`);
      if (this.componentRef) {
        const apiService = this.componentRef.injector.get(ApiService);
        apiService.setBasePath(this.apiBasePath);
      }
    }
  }

  private async mount(): Promise<void> {
    try {
      if (this.componentRef) {
        return;
      }

      // Clear existing content
      this.innerHTML = "";

      // Create mount point
      this.mountPoint = document.createElement("div");
      this.mountPoint.id = "angular-root";
      this.appendChild(this.mountPoint);

      // Apply theme
      const theme = createWebComponentTheme(this.themeMode);
      applyThemeVariables(this.mountPoint, theme);

      // Bootstrap Angular module
      this.moduleRef = await platformBrowserDynamic().bootstrapModule(
        AppModule,
        { ngZone: "zone.js" }
      );

      const injector = this.moduleRef.injector;
      const applicationRef = injector.get(ApplicationRef);
      const environmentInjector = injector.get(EnvironmentInjector);

      // Create component manually
      this.componentRef = createComponent(AppComponent, {
        environmentInjector,
        hostElement: this.mountPoint,
      });

      // Set initial theme via the @Input setter
      this.componentRef.instance.theme = this.themeMode;

      // Attach to Angular change detection
      applicationRef.attachView(this.componentRef.hostView);
      this.componentRef.changeDetectorRef.detectChanges();

      // Initialize theme from host (ensures ThemeService uses the correct theme)
      const themeService = this.componentRef.injector.get(ThemeService);
      themeService.initializeFromExternal(this.themeMode);

      // Set API base path
      const apiService = this.componentRef.injector.get(ApiService);
      apiService.setBasePath(this.apiBasePath);

      // Emit ready event
      emitCustomEvent(this, "angular-ready", { theme: this.themeMode });
    } catch (error) {
      console.error("Error mounting Angular web component:", error);
      this.showError(error);
    }
  }

  private updateTheme(): void {
    try {
      console.log(`[Angular Vite WC] updateTheme called, themeMode: ${this.themeMode}`);
      
      if (!this.mountPoint || !this.componentRef) {
        console.log(`[Angular Vite WC] Cannot update theme - missing mountPoint or componentRef`);
        return;
      }

      const theme = createWebComponentTheme(this.themeMode);
      console.log(`[Angular Vite WC] Created web component theme:`, theme);
      applyThemeVariables(this.mountPoint, theme);
      console.log(`[Angular Vite WC] Applied theme variables to mount point`);

      // Update component theme via service
      if (this.moduleRef) {
        const themeService = this.moduleRef.injector.get(ThemeService);
        console.log(`[Angular Vite WC] ThemeService obtained, current theme:`, themeService.getCurrentTheme());
        themeService.setTheme(this.themeMode);
        console.log(`[Angular Vite WC] ThemeService.setTheme called, new theme:`, themeService.getCurrentTheme());
      } else {
        console.log(`[Angular Vite WC] No moduleRef, cannot update ThemeService`);
      }

      emitCustomEvent(this, "theme-changed", { theme: this.themeMode });
      console.log(`[Angular Vite WC] theme-changed event emitted`);
    } catch (error) {
      console.error("[Angular Vite WC] Error updating theme:", error);
    }
  }

  private unmount(): void {
    try {
      if (this.componentRef && this.moduleRef) {
        const applicationRef = this.moduleRef.injector.get(ApplicationRef);
        applicationRef.detachView(this.componentRef.hostView);
        this.componentRef.destroy();
        this.moduleRef.destroy();
        this.componentRef = null;
        this.moduleRef = null;
      }
      this.innerHTML = "";
      this.mountPoint = null;
    } catch (error) {
      console.error("Error unmounting Angular web component:", error);
    }
  }

  private showError(error: unknown): void {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    const details = error instanceof Error ? error.stack : undefined;

    const errorEl = createErrorElement(
      "Error Loading Angular Remote",
      errorMessage,
      details
    );

    this.innerHTML = "";
    this.appendChild(errorEl);
  }
}

registerWebComponent("angular-vite-widget", AngularWebComponent);

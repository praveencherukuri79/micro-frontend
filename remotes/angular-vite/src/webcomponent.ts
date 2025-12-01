import {
  ApplicationRef,
  ComponentRef,
  EnvironmentInjector,
  NgZone,
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
  private _themeMode: ThemeMode = "light";
  private _apiBasePath: string = window.location.origin;
  private mountPoint: HTMLDivElement | null = null;
  private componentRef: ComponentRef<AppComponent> | null = null;
  private moduleRef: any = null;

  static get observedAttributes(): string[] {
    return ["theme", "api-base-path"];
  }

  // Property getter/setter for 'theme' - React sets properties, not attributes
  get theme(): string {
    return this._themeMode;
  }

  set theme(value: string) {
    const newTheme = getThemeMode(value);
    console.log(`[Angular Vite WC] theme PROPERTY setter called:`, { oldValue: this._themeMode, newValue: newTheme });
    if (newTheme !== this._themeMode) {
      this._themeMode = newTheme;
      if (this.componentRef) {
        this.updateTheme();
      }
    }
  }

  // Property getter/setter for 'apiBasePath'
  get apiBasePath(): string {
    return this._apiBasePath;
  }

  set apiBasePath(value: string) {
    const newPath = value || window.location.origin;
    if (newPath !== this._apiBasePath) {
      this._apiBasePath = newPath;
      if (this.componentRef) {
        const apiService = this.componentRef.injector.get(ApiService);
        apiService.setBasePath(this._apiBasePath);
      }
    }
  }

  connectedCallback(): void {
    // Read initial attribute values
    const themeAttr = this.getAttribute("theme");
    if (themeAttr) {
      this._themeMode = getThemeMode(themeAttr);
    }
    const apiAttr = this.getAttribute("api-base-path");
    if (apiAttr) {
      this._apiBasePath = apiAttr;
    }
    console.log(`[Angular Vite WC] connectedCallback - initial theme: ${this._themeMode}`);
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
      this._themeMode = getThemeMode(newValue);
      console.log(`[Angular Vite WC] Theme mode updated to: ${this._themeMode}`);
      if (this.componentRef) {
        console.log(`[Angular Vite WC] Calling updateTheme()`);
        this.updateTheme();
      } else {
        console.log(`[Angular Vite WC] Component not mounted yet, skipping theme update`);
      }
    } else if (name === "api-base-path" && oldValue !== newValue) {
      this._apiBasePath = newValue || window.location.origin;
      console.log(`[Angular Vite WC] API base path updated to: ${this._apiBasePath}`);
      if (this.componentRef) {
        const apiService = this.componentRef.injector.get(ApiService);
        apiService.setBasePath(this._apiBasePath);
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
      const theme = createWebComponentTheme(this._themeMode);
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
      this.componentRef.instance.theme = this._themeMode;

      // Attach to Angular change detection
      applicationRef.attachView(this.componentRef.hostView);
      this.componentRef.changeDetectorRef.detectChanges();

      // Initialize theme from host (ensures ThemeService uses the correct theme)
      const themeService = this.componentRef.injector.get(ThemeService);
      themeService.initializeFromExternal(this._themeMode);

      // Set API base path
      const apiService = this.componentRef.injector.get(ApiService);
      apiService.setBasePath(this._apiBasePath);

      // Emit ready event
      emitCustomEvent(this, "angular-ready", { theme: this._themeMode });
    } catch (error) {
      console.error("Error mounting Angular web component:", error);
      this.showError(error);
    }
  }

  private updateTheme(): void {
    try {
      console.log(`[Angular Vite WC] updateTheme called, themeMode: ${this._themeMode}`);
      
      if (!this.mountPoint || !this.componentRef || !this.moduleRef) {
        console.log(`[Angular Vite WC] Cannot update theme - missing mountPoint, componentRef, or moduleRef`);
        return;
      }

      // Apply CSS variables to mount point
      const theme = createWebComponentTheme(this._themeMode);
      console.log(`[Angular Vite WC] Created web component theme:`, theme);
      applyThemeVariables(this.mountPoint, theme);
      console.log(`[Angular Vite WC] Applied theme variables to mount point`);

      // Get NgZone to run updates inside Angular's zone
      const ngZone = this.moduleRef.injector.get(NgZone);
      
      // Run theme update inside Angular's zone to trigger change detection
      ngZone.run(() => {
        const themeService = this.moduleRef.injector.get(ThemeService);
        console.log(`[Angular Vite WC] ThemeService obtained, current theme:`, themeService.getCurrentTheme());
        themeService.setTheme(this._themeMode);
        console.log(`[Angular Vite WC] ThemeService.setTheme called, new theme:`, themeService.getCurrentTheme());
        
        // Also update the component's @Input directly
        if (this.componentRef) {
          this.componentRef.instance.theme = this._themeMode;
          this.componentRef.changeDetectorRef.detectChanges();
          console.log(`[Angular Vite WC] Component change detection triggered`);
        }
      });

      emitCustomEvent(this, "theme-changed", { theme: this._themeMode });
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

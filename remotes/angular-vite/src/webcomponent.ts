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
  private mountPoint: HTMLDivElement | null = null;
  private componentRef: ComponentRef<AppComponent> | null = null;
  private moduleRef: any = null;

  static get observedAttributes(): string[] {
    return ["theme"];
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
    if (name === "theme" && oldValue !== newValue) {
      this.themeMode = getThemeMode(newValue);
      if (this.componentRef) {
        this.updateTheme();
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

      // Set initial theme
      this.componentRef.instance.initialTheme = this.themeMode;

      // Attach to Angular change detection
      applicationRef.attachView(this.componentRef.hostView);
      this.componentRef.changeDetectorRef.detectChanges();

      // Emit ready event
      emitCustomEvent(this, "angular-ready", { theme: this.themeMode });
    } catch (error) {
      console.error("Error mounting Angular web component:", error);
      this.showError(error);
    }
  }

  private updateTheme(): void {
    try {
      if (!this.mountPoint || !this.componentRef) return;

      const theme = createWebComponentTheme(this.themeMode);
      applyThemeVariables(this.mountPoint, theme);

      // Update component theme via service
      if (this.moduleRef) {
        const themeService = this.moduleRef.injector.get(ThemeService);
        themeService.setTheme(this.themeMode);
      }

      emitCustomEvent(this, "theme-changed", { theme: this.themeMode });
    } catch (error) {
      console.error("Error updating theme:", error);
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

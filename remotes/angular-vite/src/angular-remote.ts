import {
  ApplicationRef,
  ComponentRef,
  createComponent,
  EnvironmentInjector,
} from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import "zone.js";
import { AppModule } from "./app.module";
import { AppComponent } from "./components/app/app.component";
import { ApiService } from "./services/api.service";
import { ThemeMode } from "./services/theme.service";
import { showError } from "./utils/errorFallback";

export interface MountOptions {
  theme?: ThemeMode;
  apiBasePath?: string;
}

/**
 * Angular Remote - Module Federation entry point
 * Manually creates and mounts the Angular component
 */
export default async function mount(
  container: HTMLElement,
  options: MountOptions = {}
): Promise<() => void> {
  const { theme = "light", apiBasePath } = options;
  try {
    // Create a mount point div
    const mountPoint = document.createElement("div");
    mountPoint.id = "angular-app";
    container.appendChild(mountPoint);

    // Bootstrap the module (but don't auto-bootstrap components)
    const moduleRef = await platformBrowserDynamic().bootstrapModule(
      AppModule,
      {
        ngZone: "zone.js",
      }
    );

    // Get injector and application ref
    const injector = moduleRef.injector;
    const applicationRef = injector.get(ApplicationRef);
    const environmentInjector = injector.get(EnvironmentInjector);

    // Manually create the component
    const componentRef: ComponentRef<AppComponent> = createComponent(
      AppComponent,
      {
        environmentInjector,
        hostElement: mountPoint,
      }
    );

    // Attach the component to Angular's change detection
    applicationRef.attachView(componentRef.hostView);

    // Initialize theme from host (this ensures ThemeService uses the host's theme)
    const { ThemeService } = await import("./services/theme.service");
    const themeService = componentRef.injector.get(ThemeService);
    themeService.initializeFromExternal(theme);

    // Trigger change detection
    componentRef.changeDetectorRef.detectChanges();

    // Set API base path
    const apiService = componentRef.injector.get(ApiService);
    apiService.setBasePath(apiBasePath);

    console.log("Angular Vite remote mounted successfully");
    console.log(`API base path: ${apiService.getBasePath()}`);

    let destroyed = false; // Flag to prevent double cleanup

    // Return cleanup function
    return () => {
      if (destroyed) {
        console.log("[Angular Vite MF] Cleanup already performed, skipping.");
        return;
      }
      destroyed = true;

      try {
        console.log("[Angular Vite MF] Cleanup function called.");

        if (componentRef && !componentRef.hostView.destroyed) {
          console.log("[Angular Vite MF] Detaching view and destroying component.");
          applicationRef.detachView(componentRef.hostView);
          componentRef.destroy();
        } else {
          console.log("[Angular Vite MF] ComponentRef or hostView already destroyed/invalid.");
        }

        // Don't manually destroy moduleRef - it manages its own lifecycle
        // Manually destroying it can lead to NG06006 errors

        if (container) {
          console.log("[Angular Vite MF] Clearing container.");
          container.innerHTML = "";
        }
        console.log("[Angular Vite MF] Cleanup completed successfully.");
      } catch (error) {
        console.error("[Angular Vite MF] Error during cleanup:", error);
      }
    };
  } catch (error) {
    console.error("Error mounting Angular remote:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    const details = error instanceof Error ? error.stack : undefined;

    showError(container, "Error Loading Angular Remote", errorMessage, details);

    return () => {};
  }
}

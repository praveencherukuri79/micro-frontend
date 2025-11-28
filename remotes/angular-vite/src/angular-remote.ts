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
import { ThemeMode } from "./services/theme.service";
import { showError } from "./utils/errorFallback";

/**
 * Angular Remote - Module Federation entry point
 * Manually creates and mounts the Angular component
 */
export default async function mount(
  container: HTMLElement,
  theme: ThemeMode = "light"
): Promise<() => void> {
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

    // Set the initial theme
    componentRef.instance.initialTheme = theme;

    // Attach the component to Angular's change detection
    applicationRef.attachView(componentRef.hostView);

    // Trigger initial change detection
    componentRef.changeDetectorRef.detectChanges();

    console.log("Angular remote mounted successfully");

    // Return cleanup function
    return () => {
      try {
        applicationRef.detachView(componentRef.hostView);
        componentRef.destroy();
        moduleRef.destroy();
        container.innerHTML = "";
        console.log("Angular remote unmounted");
      } catch (error) {
        console.error("Error cleaning up Angular app:", error);
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

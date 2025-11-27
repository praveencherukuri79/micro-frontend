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

    // Show error UI
    const errorDiv = document.createElement("div");
    errorDiv.style.padding = "2rem";
    errorDiv.style.background = "#ffebee";
    errorDiv.style.border = "1px solid #f44336";
    errorDiv.style.borderRadius = "8px";
    errorDiv.style.color = "#c62828";

    const title = document.createElement("h3");
    title.textContent = "Error Loading Angular Remote";
    title.style.margin = "0 0 0.5rem 0";

    const message = document.createElement("p");
    message.textContent =
      error instanceof Error ? error.message : "Unknown error";
    message.style.margin = "0";

    const details = document.createElement("pre");
    details.textContent = error instanceof Error ? error.stack || "" : "";
    details.style.fontSize = "0.75rem";
    details.style.marginTop = "1rem";
    details.style.overflow = "auto";

    errorDiv.appendChild(title);
    errorDiv.appendChild(message);
    if (error instanceof Error && error.stack) {
      errorDiv.appendChild(details);
    }
    container.appendChild(errorDiv);

    return () => {};
  }
}

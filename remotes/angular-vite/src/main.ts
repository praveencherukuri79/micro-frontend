import {
  ApplicationRef,
  EnvironmentInjector,
  createComponent,
} from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import "zone.js";
import { AppModule } from "./app.module";
import { AppComponent } from "./components/app/app.component";

// Mount the app for standalone development
const app = document.querySelector<HTMLDivElement>("#app");

if (app) {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then((moduleRef) => {
      const injector = moduleRef.injector;
      const applicationRef = injector.get(ApplicationRef);
      const environmentInjector = injector.get(EnvironmentInjector);

      // Create and attach the component
      const componentRef = createComponent(AppComponent, {
        environmentInjector,
        hostElement: app,
      });

      applicationRef.attachView(componentRef.hostView);
      componentRef.changeDetectorRef.detectChanges();

      console.log("Angular app mounted in development mode");
    })
    .catch((err) => console.error("Angular bootstrap error:", err));
} else {
  console.error("Could not find #app element");
}

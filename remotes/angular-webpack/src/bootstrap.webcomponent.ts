import { bootstrapApplication } from "@angular/platform-browser";
import { createCustomElement } from "@angular/elements";
import { AppComponent } from "./components/app/app.component";

bootstrapApplication(AppComponent)
  .then((appRef) => {
    const injector = appRef.injector;
    const WebComponent = createCustomElement(AppComponent, { injector });

    if (!customElements.get("angular-webpack-widget")) {
      customElements.define("angular-webpack-widget", WebComponent);
    }

    console.log("Angular Webpack widget registered");
  })
  .catch((err) =>
    console.error("Angular Webpack web component bootstrap error:", err)
  );


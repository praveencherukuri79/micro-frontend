import { createPinia } from "pinia";
import { createApp, App as VueApp } from "vue";
import App from "./components/app/App.vue";
import { useThemeStore } from "./stores/theme";
import { createErrorElement } from "./utils/errorFallback";
import { applyThemeVariables, createWebComponentTheme } from "./utils/theme";
import {
  emitCustomEvent,
  getThemeMode,
  registerWebComponent,
  ThemeMode,
} from "./utils/webComponent";

// Import component CSS (not global style.css)
import appCSS from "./components/app/App.css?raw";

class VueWebComponent extends HTMLElement {
  private app: VueApp | null = null;
  private themeMode: ThemeMode = "light";
  private mountPoint: HTMLDivElement | null = null;

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
      if (this.app) {
        this.updateTheme();
      } else {
        this.mount();
      }
    }
  }

  private mount(): void {
    try {
      if (this.app) {
        this.updateTheme();
        return;
      }

      // Clear existing content
      this.innerHTML = "";

      // Inject CSS into document head (only once)
      if (!document.getElementById("vue-widget-styles")) {
        const style = document.createElement("style");
        style.id = "vue-widget-styles";
        style.textContent = appCSS;
        document.head.appendChild(style);
      }

      // Create mount point
      this.mountPoint = document.createElement("div");
      this.appendChild(this.mountPoint);

      // Apply theme
      const theme = createWebComponentTheme(this.themeMode);
      applyThemeVariables(this, theme);

      // Create Pinia store
      const pinia = createPinia();

      // Create Vue app
      this.app = createApp(App);
      this.app.use(pinia);
      this.app.mount(this.mountPoint);

      // Set theme via store
      const themeStore = useThemeStore(pinia);
      themeStore.setTheme(this.themeMode);

      // Emit ready event
      emitCustomEvent(this, "vue-ready", { theme: this.themeMode });
    } catch (error) {
      console.error("Error mounting Vue web component:", error);
      this.showError(error);
    }
  }

  private updateTheme(): void {
    try {
      const theme = createWebComponentTheme(this.themeMode);
      applyThemeVariables(this, theme);

      // Update Pinia store
      if (this.app) {
        const pinia = this.app.config.globalProperties.$pinia;
        if (pinia) {
          const themeStore = useThemeStore(pinia);
          themeStore.setTheme(this.themeMode);
        }
      }

      emitCustomEvent(this, "theme-changed", { theme: this.themeMode });
    } catch (error) {
      console.error("Error updating theme:", error);
    }
  }

  private unmount(): void {
    try {
      if (this.app) {
        this.app.unmount();
        this.app = null;
      }
      this.innerHTML = "";
      this.mountPoint = null;
    } catch (error) {
      console.error("Error unmounting Vue web component:", error);
    }
  }

  private showError(error: unknown): void {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    const details = error instanceof Error ? error.stack : undefined;

    const errorEl = createErrorElement(
      "Error Loading Vue Remote",
      errorMessage,
      details
    );

    this.innerHTML = "";
    this.appendChild(errorEl);
  }
}

registerWebComponent("vue-widget", VueWebComponent);

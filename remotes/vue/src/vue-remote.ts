import { createApp, App as VueApp } from "vue";
import { createPinia } from "pinia";
import App from "./components/app/App.vue";

export type ThemeMode = "light" | "dark";

export interface MountOptions {
  theme?: ThemeMode;
  apiBasePath?: string;
}

/**
 * Vue Remote - Module Federation entry point
 * Creates and mounts the Vue application
 */
export default function mount(
  container: HTMLElement,
  options: MountOptions = {}
): () => void {
  const { theme = "light", apiBasePath } = options;
  try {
    const mountPoint = document.createElement("div");
    container.appendChild(mountPoint);

    const pinia = createPinia();
    const app: VueApp = createApp(App, {
      initialTheme: theme,
      apiBasePath,
    });

    app.use(pinia);
    app.mount(mountPoint);

    console.log(
      `[Vue Remote] Mounted with API base: ${
        apiBasePath || window.location.origin
      }`
    );

    return () => {
      try {
        app.unmount();
        container.innerHTML = "";
      } catch (error) {
        console.error("Error cleaning up Vue app:", error);
      }
    };
  } catch (error) {
    console.error("Error mounting Vue remote:", error);

    const errorDiv = document.createElement("div");
    errorDiv.style.padding = "2rem";
    errorDiv.style.background = "#ffebee";
    errorDiv.style.border = "1px solid #f44336";
    errorDiv.style.borderRadius = "8px";
    errorDiv.style.color = "#c62828";

    const title = document.createElement("h3");
    title.textContent = "Error Loading Vue Remote";
    title.style.margin = "0 0 0.5rem 0";

    const message = document.createElement("p");
    message.textContent =
      error instanceof Error ? error.message : "Unknown error";
    message.style.margin = "0";

    errorDiv.appendChild(title);
    errorDiv.appendChild(message);
    container.appendChild(errorDiv);

    return () => {};
  }
}

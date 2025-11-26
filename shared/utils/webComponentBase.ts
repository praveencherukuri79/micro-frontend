import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { createAppTheme, getThemeMode } from "./theme";
import { logger } from "./logger";
import { handleError } from "./errorHandling";
import { ThemeMode, THEME_MODE } from "./constants";

/**
 * Base class for all web components
 * Reduces duplication and standardizes web component creation
 */
export abstract class WebComponentBase extends HTMLElement {
  protected root: ReactDOM.Root | null = null;
  protected themeMode: ThemeMode = THEME_MODE.LIGHT;

  static get observedAttributes(): string[] {
    return ["theme"];
  }

  connectedCallback(): void {
    try {
      this.mount();
    } catch (error) {
      handleError(error, "WebComponent.connectedCallback");
    }
  }

  disconnectedCallback(): void {
    try {
      this.unmount();
    } catch (error) {
      handleError(error, "WebComponent.disconnectedCallback");
    }
  }

  attributeChangedCallback(
    name: string,
    oldValue: string,
    newValue: string
  ): void {
    if (name === "theme" && oldValue !== newValue) {
      this.themeMode = getThemeMode(newValue);
      try {
        this.mount();
      } catch (error) {
        handleError(error, "WebComponent.attributeChangedCallback");
      }
    }
  }

  protected mount(): void {
    try {
      // Clear previous content
      if (this.root) {
        this.root.unmount();
      }

      this.innerHTML = "";
      const mountPoint = document.createElement("div");
      this.appendChild(mountPoint);

      const theme = createAppTheme(this.themeMode);
      const component = this.renderComponent();

      this.root = ReactDOM.createRoot(mountPoint);
      this.root.render(
        <React.StrictMode>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {component}
          </ThemeProvider>
        </React.StrictMode>
      );

      logger.debug(`Web component mounted: ${this.constructor.name}`);
    } catch (error) {
      handleError(error, "WebComponent.mount");
      this.showError();
    }
  }

  protected unmount(): void {
    if (this.root) {
      this.root.unmount();
      this.root = null;
      logger.debug(`Web component unmounted: ${this.constructor.name}`);
    }
  }

  protected showError(): void {
    this.innerHTML = `
      <div style="padding: 20px; border: 1px solid #f44336; border-radius: 4px; background: #ffebee; color: #c62828;">
        <strong>Error Loading Component</strong>
        <p>Failed to load the ${this.constructor.name}. Please try refreshing the page.</p>
      </div>
    `;
  }

  /**
   * Abstract method to be implemented by child classes
   * Should return the React component to render
   */
  protected abstract renderComponent(): React.ReactElement;
}

/**
 * Register a custom element safely
 */
export const registerWebComponent = (
  tagName: string,
  elementClass: CustomElementConstructor
): void => {
  try {
    if (!customElements.get(tagName)) {
      customElements.define(tagName, elementClass);
      logger.info(`Registered web component: ${tagName}`);
    } else {
      logger.warn(`Web component already registered: ${tagName}`);
    }
  } catch (error) {
    handleError(error, `registerWebComponent(${tagName})`);
  }
};

import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import ProductsPage from "./ProductsPage";
import { createWebComponentTheme } from "./utils/theme";
import {
  ThemeMode,
  getThemeMode,
  registerWebComponent,
  unmountReactRoot,
} from "./utils/webComponent";

class ProductsWebComponent extends HTMLElement {
  private root: ReactDOM.Root | null = null;
  private themeMode: ThemeMode = "light";
  private apiBasePath: string = window.location.origin;

  static get observedAttributes() {
    return ["theme", "api-base-path"];
  }

  connectedCallback() {
    this.mount();
  }

  disconnectedCallback() {
    unmountReactRoot(this.root);
    this.root = null;
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === "theme" && oldValue !== newValue) {
      this.themeMode = getThemeMode(newValue);
      this.render(); // Just re-render, don't remount
    } else if (name === "api-base-path" && oldValue !== newValue) {
      this.apiBasePath = newValue || window.location.origin;
      this.render(); // Just re-render, don't remount
    }
  }

  private mount() {
    // Only mount once
    if (this.root) return;

    this.innerHTML = "";
    const mountPoint = document.createElement("div");
    this.appendChild(mountPoint);

    this.root = ReactDOM.createRoot(mountPoint);
    this.render();
  }

  private render() {
    if (!this.root) return;

    const theme = createWebComponentTheme(this.themeMode);

    this.root.render(
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ProductsPage apiBasePath={this.apiBasePath} />
        </ThemeProvider>
      </React.StrictMode>
    );
  }
}

registerWebComponent("products-widget", ProductsWebComponent);

export default ProductsWebComponent;

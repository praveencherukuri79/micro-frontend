import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import {
  ThemeMode,
  getThemeMode,
  registerWebComponent,
  safeParseInt,
  unmountReactRoot,
} from "./utils/webComponent";
import { createWebComponentTheme } from "./utils/theme";

class ShellWebComponent extends HTMLElement {
  private root: ReactDOM.Root | null = null;
  private themeMode: ThemeMode = "light";
  private cartCount: number = 0;
  private component: "header" | "footer" = "header";

  static get observedAttributes() {
    return ["theme", "cart-count", "component"];
  }

  connectedCallback() {
    this.mount();
  }

  disconnectedCallback() {
    unmountReactRoot(this.root);
    this.root = null;
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue === newValue) return;

    switch (name) {
      case "theme":
        this.themeMode = getThemeMode(newValue);
        break;
      case "cart-count":
        this.cartCount = safeParseInt(newValue);
        break;
      case "component":
        this.component = (newValue as "header" | "footer") || "header";
        break;
    }

    this.mount();
  }

  private mount() {
    if (this.root) {
      this.root.unmount();
    }

    this.innerHTML = "";
    const mountPoint = document.createElement("div");
    this.appendChild(mountPoint);

    const theme = createWebComponentTheme(this.themeMode);

    const handleThemeToggle = () => {
      this.dispatchEvent(
        new CustomEvent("theme-toggle", {
          bubbles: true,
          composed: true,
        })
      );
    };

    const handleNavigate = (path: string) => {
      this.dispatchEvent(
        new CustomEvent("navigate", {
          detail: { path },
          bubbles: true,
          composed: true,
        })
      );
    };

    this.root = ReactDOM.createRoot(mountPoint);
    this.root.render(
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {this.component === "header" ? (
            <Header
              themeMode={this.themeMode}
              cartCount={this.cartCount}
              onToggleTheme={handleThemeToggle}
              onNavigate={handleNavigate}
            />
          ) : (
            <Footer />
          )}
        </ThemeProvider>
      </React.StrictMode>
    );
  }
}

registerWebComponent("shell-widget", ShellWebComponent);

export default ShellWebComponent;

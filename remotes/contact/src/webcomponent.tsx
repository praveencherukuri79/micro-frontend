import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import ContactPage from "./ContactPage";
import {
  ThemeMode,
  getThemeMode,
  registerWebComponent,
  unmountReactRoot,
} from "./utils/webComponent";
import { createWebComponentTheme } from "./utils/theme";

class ContactWebComponent extends HTMLElement {
  private root: ReactDOM.Root | null = null;
  private themeMode: ThemeMode = "light";

  static get observedAttributes() {
    return ["theme"];
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
      this.mount();
    }
  }

  private mount() {
    if (this.root) {
      this.root.unmount();
    }

    this.innerHTML = "";
    const mountPoint = document.createElement("div");
    this.appendChild(mountPoint);

    const theme = createWebComponentTheme(this.themeMode);

    this.root = ReactDOM.createRoot(mountPoint);
    this.root.render(
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ContactPage />
        </ThemeProvider>
      </React.StrictMode>
    );
  }
}

registerWebComponent("contact-widget", ContactWebComponent);

export default ContactWebComponent;

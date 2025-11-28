export type ThemeMode = "light" | "dark";

/**
 * Safely parse theme attribute value
 */
export function getThemeMode(value: string | null): ThemeMode {
  return value === "dark" ? "dark" : "light";
}

/**
 * Safely register web component
 */
export function registerWebComponent(
  name: string,
  component: CustomElementConstructor
): void {
  try {
    if (!customElements.get(name)) {
      customElements.define(name, component);
      console.log(`Web component "${name}" registered successfully`);
    }
  } catch (error) {
    console.error(`Error registering web component "${name}":`, error);
  }
}

/**
 * Emit custom event from web component
 */
export function emitCustomEvent<T = any>(
  element: HTMLElement,
  eventName: string,
  detail: T
): void {
  try {
    const event = new CustomEvent(eventName, {
      detail,
      bubbles: true,
      composed: true,
    });
    element.dispatchEvent(event);
  } catch (error) {
    console.error(`Error emitting event "${eventName}":`, error);
  }
}

/**
 * Create theme colors based on mode
 */
export function getThemeColors(mode: ThemeMode) {
  return mode === "light"
    ? {
        primary: "#1976d2",
        secondary: "#9c27b0",
        background: "#f5f5f5",
        surface: "#ffffff",
        textPrimary: "#212121",
        textSecondary: "#757575",
      }
    : {
        primary: "#90caf9",
        secondary: "#ce93d8",
        background: "#121212",
        surface: "#1e1e1e",
        textPrimary: "#ffffff",
        textSecondary: "#b0b0b0",
      };
}

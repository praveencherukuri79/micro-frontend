export type ThemeMode = 'light' | 'dark';

/**
 * Safely parse theme attribute value
 */
export function getThemeMode(value: string | null): ThemeMode {
  return value === 'dark' ? 'dark' : 'light';
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


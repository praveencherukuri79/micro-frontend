import ReactDOM from 'react-dom/client';

export type ThemeMode = 'light' | 'dark';

/**
 * Validate theme mode
 */
export const isValidThemeMode = (mode: string): mode is ThemeMode => {
  return mode === 'light' || mode === 'dark';
};

/**
 * Get theme mode with fallback
 */
export const getThemeMode = (mode: string | null | undefined): ThemeMode => {
  return mode && isValidThemeMode(mode) ? mode : 'light';
};

/**
 * Safe parseInt with fallback
 */
export const safeParseInt = (value: string, fallback = 0): number => {
  const parsed = parseInt(value, 10);
  return isNaN(parsed) ? fallback : parsed;
};

/**
 * Unmount React root safely
 */
export const unmountReactRoot = (root: ReactDOM.Root | null): void => {
  if (root) {
    try {
      root.unmount();
    } catch (error) {
      console.error('Error unmounting React root:', error);
    }
  }
};

/**
 * Register custom element safely
 */
export const registerWebComponent = (
  tagName: string,
  elementClass: CustomElementConstructor
): void => {
  if (!customElements.get(tagName)) {
    try {
      customElements.define(tagName, elementClass);
    } catch (error) {
      console.error(`Error registering web component ${tagName}:`, error);
    }
  }
};

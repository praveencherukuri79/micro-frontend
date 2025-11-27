export type ThemeMode = 'light' | 'dark';

export interface ThemeColors {
  primary: string;
  primaryLight: string;
  primaryDark: string;
  secondary: string;
  secondaryLight: string;
  secondaryDark: string;
  background: string;
  surface: string;
  textPrimary: string;
  textSecondary: string;
}

/**
 * Create theme configuration for web components
 * Matches the host's theme configuration for visual consistency
 */
export function createWebComponentTheme(mode: ThemeMode = 'light'): ThemeColors {
  if (mode === 'light') {
    return {
      primary: '#1976d2',
      primaryLight: '#42a5f5',
      primaryDark: '#1565c0',
      secondary: '#9c27b0',
      secondaryLight: '#ba68c8',
      secondaryDark: '#7b1fa2',
      background: '#f5f5f5',
      surface: '#ffffff',
      textPrimary: '#212121',
      textSecondary: '#757575',
    };
  } else {
    return {
      primary: '#90caf9',
      primaryLight: '#e3f2fd',
      primaryDark: '#42a5f5',
      secondary: '#ce93d8',
      secondaryLight: '#f3e5f5',
      secondaryDark: '#ab47bc',
      background: '#121212',
      surface: '#1e1e1e',
      textPrimary: '#ffffff',
      textSecondary: '#b0b0b0',
    };
  }
}

/**
 * Apply theme CSS variables to an element
 */
export function applyThemeVariables(element: HTMLElement, theme: ThemeColors): void {
  try {
    element.style.setProperty('--color-primary', theme.primary);
    element.style.setProperty('--color-primary-light', theme.primaryLight);
    element.style.setProperty('--color-primary-dark', theme.primaryDark);
    element.style.setProperty('--color-secondary', theme.secondary);
    element.style.setProperty('--color-secondary-light', theme.secondaryLight);
    element.style.setProperty('--color-secondary-dark', theme.secondaryDark);
    element.style.setProperty('--color-background', theme.background);
    element.style.setProperty('--color-surface', theme.surface);
    element.style.setProperty('--color-text-primary', theme.textPrimary);
    element.style.setProperty('--color-text-secondary', theme.textSecondary);
  } catch (error) {
    console.error('Error applying theme variables:', error);
  }
}


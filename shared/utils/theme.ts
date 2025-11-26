import { createTheme, Theme } from "@mui/material";
import { THEME_MODE, ThemeMode } from "./constants";

/**
 * Create MUI theme with specified mode
 */
export const createAppTheme = (mode: ThemeMode = THEME_MODE.LIGHT): Theme => {
  return createTheme({
    palette: {
      mode,
      ...(mode === THEME_MODE.LIGHT
        ? {
            primary: {
              main: "#1976d2",
            },
            secondary: {
              main: "#dc004e",
            },
          }
        : {
            primary: {
              main: "#90caf9",
            },
            secondary: {
              main: "#f48fb1",
            },
          }),
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontWeight: 700,
      },
      h2: {
        fontWeight: 700,
      },
      h3: {
        fontWeight: 600,
      },
      h4: {
        fontWeight: 600,
      },
      h5: {
        fontWeight: 600,
      },
      h6: {
        fontWeight: 600,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
          },
        },
      },
    },
  });
};

/**
 * Validate theme mode
 */
export const isValidThemeMode = (mode: string): mode is ThemeMode => {
  return mode === THEME_MODE.LIGHT || mode === THEME_MODE.DARK;
};

/**
 * Get theme mode from string with fallback
 */
export const getThemeMode = (mode: string | null | undefined): ThemeMode => {
  if (mode && isValidThemeMode(mode)) {
    return mode;
  }
  return THEME_MODE.LIGHT;
};

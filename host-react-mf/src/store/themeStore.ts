import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ThemeMode, THEME_MODE } from "../utils/constants";
import { logger } from "../utils/logger";

interface ThemeState {
  mode: ThemeMode;
  toggleTheme: () => void;
  setTheme: (mode: ThemeMode) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      mode: THEME_MODE.LIGHT,
      toggleTheme: () =>
        set((state) => {
          const newMode =
            state.mode === THEME_MODE.LIGHT
              ? THEME_MODE.DARK
              : THEME_MODE.LIGHT;
          logger.debug("Theme toggled to:", newMode);
          return { mode: newMode };
        }),
      setTheme: (mode) => {
        logger.debug("Theme set to:", mode);
        set({ mode });
      },
    }),
    {
      name: "theme-storage",
    }
  )
);

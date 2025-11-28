import { defineStore } from "pinia";
import { ref, computed } from "vue";

export type ThemeMode = "light" | "dark";

export const useThemeStore = defineStore("theme", () => {
  // State
  const mode = ref<ThemeMode>(getStoredTheme());

  // Getters
  const isDark = computed(() => mode.value === "dark");
  const isLight = computed(() => mode.value === "light");

  // Actions
  function setTheme(newMode: ThemeMode): void {
    try {
      mode.value = newMode;
      storeTheme(newMode);
      applyThemeToDocument(newMode);
    } catch (error) {
      console.error("Error setting theme:", error);
    }
  }

  function toggleTheme(): void {
    const newMode = mode.value === "light" ? "dark" : "light";
    setTheme(newMode);
  }

  // Helper functions
  function getStoredTheme(): ThemeMode {
    try {
      const stored = localStorage.getItem("vue-remote-theme");
      return (stored === "dark" ? "dark" : "light") as ThemeMode;
    } catch (error) {
      console.error("Error reading stored theme:", error);
      return "light";
    }
  }

  function storeTheme(theme: ThemeMode): void {
    try {
      localStorage.setItem("vue-remote-theme", theme);
    } catch (error) {
      console.error("Error storing theme:", error);
    }
  }

  function applyThemeToDocument(theme: ThemeMode): void {
    try {
      document.documentElement.setAttribute("data-theme", theme);
    } catch (error) {
      console.error("Error applying theme to document:", error);
    }
  }

  // Initialize theme on store creation
  applyThemeToDocument(mode.value);

  return {
    mode,
    isDark,
    isLight,
    setTheme,
    toggleTheme,
  };
});

import { defineStore } from "pinia";
import { ref } from "vue";

export interface UserSettings {
  notifications: boolean;
  autoSave: boolean;
  language: string;
  twoFactorAuth: boolean;
  dataCollection: boolean;
  sessionTimeout: string;
  compactMode: boolean;
  animations: boolean;
}

const DEFAULT_SETTINGS: UserSettings = {
  notifications: true,
  autoSave: true,
  language: "en",
  twoFactorAuth: false,
  dataCollection: true,
  sessionTimeout: "30",
  compactMode: false,
  animations: true,
};

export const useSettingsStore = defineStore("settings", () => {
  // State
  const settings = ref<UserSettings>(loadSettings());

  // Actions
  function saveSettings(): void {
    try {
      localStorage.setItem(
        "vue-remote-settings",
        JSON.stringify(settings.value)
      );
      console.log("Settings saved successfully");
    } catch (error) {
      console.error("Error saving settings:", error);
      throw error;
    }
  }

  function resetSettings(): void {
    try {
      settings.value = { ...DEFAULT_SETTINGS };
      saveSettings();
      console.log("Settings reset to defaults");
    } catch (error) {
      console.error("Error resetting settings:", error);
      throw error;
    }
  }

  function updateSetting<K extends keyof UserSettings>(
    key: K,
    value: UserSettings[K]
  ): void {
    try {
      settings.value[key] = value;
    } catch (error) {
      console.error(`Error updating setting ${key}:`, error);
      throw error;
    }
  }

  // Helper functions
  function loadSettings(): UserSettings {
    try {
      const stored = localStorage.getItem("vue-remote-settings");
      if (stored) {
        const parsed = JSON.parse(stored);
        return { ...DEFAULT_SETTINGS, ...parsed };
      }
    } catch (error) {
      console.error("Error loading settings:", error);
    }
    return { ...DEFAULT_SETTINGS };
  }

  return {
    settings,
    saveSettings,
    resetSettings,
    updateSetting,
  };
});

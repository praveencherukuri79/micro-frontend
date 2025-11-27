<template>
  <div :class="['app-container', themeMode]">
    <div class="app-header">
      <h1>Vue Remote</h1>
      <p class="subtitle">Built with Vue 3 + Pinia + TypeScript</p>
      <button class="theme-toggle" @click="toggleTheme">
        {{ themeMode === 'light' ? '🌙 Dark' : '☀️ Light' }}
      </button>
    </div>

    <div class="settings-sections">
      <div class="card">
        <h3>General</h3>
        <div class="settings-group">
          <setting-item
            label="Notifications"
            description="Receive notifications about updates"
          >
            <toggle-switch v-model="settings.notifications" />
          </setting-item>

          <setting-item
            label="Auto-save"
            description="Automatically save changes"
          >
            <toggle-switch v-model="settings.autoSave" />
          </setting-item>

          <setting-item
            label="Language"
            description="Select your preferred language"
          >
            <select v-model="settings.language" class="setting-select">
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </select>
          </setting-item>
        </div>
      </div>

      <div class="card">
        <h3>Privacy & Security</h3>
        <div class="settings-group">
          <setting-item
            label="Two-factor Authentication"
            description="Add an extra layer of security"
          >
            <toggle-switch v-model="settings.twoFactorAuth" />
          </setting-item>

          <setting-item
            label="Data Collection"
            description="Allow anonymous usage data collection"
          >
            <toggle-switch v-model="settings.dataCollection" />
          </setting-item>
        </div>
      </div>

      <div class="card">
        <h3>Display</h3>
        <div class="settings-group">
          <setting-item
            label="Compact Mode"
            description="Show more content with less spacing"
          >
            <toggle-switch v-model="settings.compactMode" />
          </setting-item>

          <setting-item
            label="Animations"
            description="Enable smooth transitions"
          >
            <toggle-switch v-model="settings.animations" />
          </setting-item>
        </div>
      </div>
    </div>

    <div class="footer-actions">
      <button class="btn-secondary" @click="resetSettings">Reset to Defaults</button>
      <button class="btn-primary" @click="saveSettings">Save Changes</button>
    </div>

    <div class="tech-info">
      <span class="badge">Vue 3</span>
      <span class="badge">TypeScript</span>
      <span class="badge">Pinia</span>
      <span class="badge">Module Federation</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useThemeStore } from '../../stores/theme';
import { useSettingsStore } from '../../stores/settings';
import ToggleSwitch from '../ToggleSwitch.vue';
import SettingItem from '../SettingItem.vue';

interface Props {
  initialTheme?: 'light' | 'dark';
}

const props = withDefaults(defineProps<Props>(), {
  initialTheme: 'light',
});

const themeStore = useThemeStore();
const settingsStore = useSettingsStore();

themeStore.setTheme(props.initialTheme);

const themeMode = computed(() => themeStore.mode);
const settings = computed(() => settingsStore.settings);

const toggleTheme = () => {
  themeStore.toggleTheme();
};

const saveSettings = () => {
  settingsStore.saveSettings();
  alert('Settings saved successfully!');
};

const resetSettings = () => {
  if (confirm('Are you sure you want to reset all settings to defaults?')) {
    settingsStore.resetSettings();
  }
};
</script>

<style scoped src="./App.css"></style>


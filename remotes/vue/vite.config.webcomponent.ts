import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import {
  defineConfig as wcDefineConfig,
  webComponentConfig,
} from "./.config/webcomponent/webcomponent.config";

/**
 * Vite Configuration for Vue Remote (Web Component Mode)
 * Build configs are separated in .config/ directory
 */
export default defineConfig({
  plugins: [vue()],
  build: webComponentConfig as any,
  define: wcDefineConfig,
});

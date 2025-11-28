import { defineConfig } from "vite";
import {
  webComponentConfig,
  defineConfig as wcDefineConfig,
} from "./.config/webcomponent/webcomponent.config";

/**
 * Vite Configuration for Angular-Vite Remote (Web Component Mode)
 * Build configs are separated in .config/ directory
 */
export default defineConfig({
  build: webComponentConfig,
  define: wcDefineConfig,
});

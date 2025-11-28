import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import {
  webComponentConfig,
  defineConfig as wcDefineConfig,
} from "./.config/webcomponent/webcomponent.config";

/**
 * Vite Configuration for Contact Remote (Web Component Mode)
 * Build configs are separated in .config/ directory
 */
export default defineConfig({
  plugins: [react()],
  build: webComponentConfig,
  define: wcDefineConfig,
});

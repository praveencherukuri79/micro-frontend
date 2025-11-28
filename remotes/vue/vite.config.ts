import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";
import {
  federationConfig,
  buildConfig,
  serverConfig,
} from "./.config/module-federation/federation.config";

/**
 * Vite Configuration for Vue Remote (Module Federation Mode)
 * Build configs are separated in .config/ directory
 */
export default defineConfig({
  plugins: [vue(), federation(federationConfig)],
  build: buildConfig,
  server: serverConfig,
});

import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";
import {
  federationConfig,
  buildConfig,
  serverConfig,
} from "./.config/module-federation/federation.config";

/**
 * Vite Configuration for Angular-Vite Remote (Module Federation Mode)
 * Build configs are separated in .config/ directory
 */
export default defineConfig({
  plugins: [federation(federationConfig)],
  build: buildConfig,
  server: serverConfig,
});

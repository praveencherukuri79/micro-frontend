import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import {
  federationConfig,
  buildConfig,
  serverConfig,
} from "./.config/module-federation/federation.config";

/**
 * Vite Configuration for Products Remote (Module Federation Mode)
 * Build configs are separated in .config/ directory
 */
export default defineConfig({
  plugins: [react(), federation(federationConfig)],
  build: buildConfig,
  server: serverConfig,
});

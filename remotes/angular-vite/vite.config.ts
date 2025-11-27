import federation from "@originjs/vite-plugin-federation";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    federation({
      name: "angularVite",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/angular-remote.ts",
      },
      shared: [],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5006,
  },
});

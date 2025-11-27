import federation from "@originjs/vite-plugin-federation";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "vueApp",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/vue-remote.ts",
      },
      shared: ["vue", "pinia"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5005,
  },
});

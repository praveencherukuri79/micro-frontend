import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist-webcomponent",
    lib: {
      entry: "./src/webcomponent.ts",
      name: "AngularViteWidget",
      fileName: "angular-vite-widget",
      formats: ["iife"],
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
  },
  define: {
    "process.env": {},
  },
});

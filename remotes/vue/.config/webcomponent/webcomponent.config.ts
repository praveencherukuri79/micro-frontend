/**
 * Web Component Build Configuration for Vue Remote
 */

export const webComponentConfig = {
  outDir: "dist-webcomponent",
  lib: {
    entry: "./src/webcomponent.ts",
    name: "VueWidget",
    fileName: "vue-widget",
    formats: ["iife"],
  },
  cssCodeSplit: false,
  rollupOptions: {
    output: {
      inlineDynamicImports: true,
    },
  },
};

export const defineConfig = {
  "process.env": {},
  // This tells Vite to inject CSS into JS
  __VITE_IS_MODERN_FLAG: true,
};

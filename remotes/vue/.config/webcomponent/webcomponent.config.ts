/**
 * Web Component Build Configuration for Vue Remote
 *
 * Note: Vite will extract CSS from .vue files to style.css
 * We don't use it because CSS is manually injected via ?raw import in webcomponent.ts
 * The extracted style.css file can be safely ignored
 */

export const webComponentConfig = {
  outDir: "dist-webcomponent",
  lib: {
    entry: "./src/webcomponent.ts",
    name: "VueWidget",
    fileName: "vue-widget",
    formats: ["iife"] as const,
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
};

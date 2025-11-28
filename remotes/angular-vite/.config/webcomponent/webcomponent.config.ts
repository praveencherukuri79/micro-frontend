/**
 * Web Component Build Configuration for Angular-Vite Remote
 */

export const webComponentConfig = {
  outDir: "dist-webcomponent",
  lib: {
    entry: "./src/webcomponent.ts",
    name: "AngularViteWidget",
    fileName: "angular-vite-widget",
    formats: ["iife"] as const,
  },
  rollupOptions: {
    output: {
      inlineDynamicImports: true,
    },
  },
};

export const defineConfig = {
  "process.env": {},
};

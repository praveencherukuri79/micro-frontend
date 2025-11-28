/**
 * Web Component Build Configuration for Shell Remote
 * This file contains the web component-specific build settings
 */

export const webComponentConfig = {
  lib: {
    entry: "./src/webcomponent.tsx",
    name: "ShellWidget",
    fileName: "shell-widget",
    formats: ["umd", "es"] as const,
  },
  rollupOptions: {
    output: {
      assetFileNames: "assets/[name][extname]",
      entryFileNames: "[name].js",
    },
  },
  outDir: "dist-webcomponent",
};

export const defineConfig = {
  "process.env.NODE_ENV": JSON.stringify("production"),
};

/**
 * Web Component Build Configuration for Products Remote
 */

export const webComponentConfig = {
  lib: {
    entry: "./src/webcomponent.tsx",
    name: "ProductsWidget",
    fileName: "products-widget",
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

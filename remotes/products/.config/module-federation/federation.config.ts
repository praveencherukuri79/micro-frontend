/**
 * Module Federation Configuration for Products Remote
 */

export const federationConfig = {
  name: "productsApp",
  filename: "remoteEntry.js",
  exposes: {
    "./ProductsPage": "./src/ProductsPage",
  },
  shared: [
    "react",
    "react-dom",
    "@mui/material",
    "@emotion/react",
    "@emotion/styled",
    "zustand",
  ],
};

export const buildConfig = {
  modulePreload: false,
  target: "esnext" as const,
  minify: false,
  cssCodeSplit: false,
};

export const serverConfig = {
  port: 5001,
};

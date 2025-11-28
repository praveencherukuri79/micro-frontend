/**
 * Module Federation Configuration for Shell Remote
 * This file contains the federation-specific settings
 */

export const federationConfig = {
  name: "shellApp",
  filename: "remoteEntry.js",
  exposes: {
    "./Header": "./src/components/Header",
    "./Footer": "./src/components/Footer",
  },
  shared: [
    "react",
    "react-dom",
    "@mui/material",
    "@mui/icons-material",
    "@emotion/react",
    "@emotion/styled",
    "zustand",
    "react-router-dom",
  ],
};

export const buildConfig = {
  modulePreload: false,
  target: "esnext" as const,
  minify: false,
  cssCodeSplit: false,
};

export const serverConfig = {
  port: 5003,
};

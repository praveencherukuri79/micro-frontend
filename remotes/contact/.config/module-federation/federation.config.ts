/**
 * Module Federation Configuration for Contact Remote
 */

export const federationConfig = {
  name: "contactApp",
  filename: "remoteEntry.js",
  exposes: {
    "./ContactPage": "./src/ContactPage",
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
  port: 5002,
};

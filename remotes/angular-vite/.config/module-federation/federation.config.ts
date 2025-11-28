/**
 * Module Federation Configuration for Angular-Vite Remote
 */

export const federationConfig = {
  name: "angularVite",
  filename: "remoteEntry.js",
  exposes: {
    "./App": "./src/angular-remote.ts",
  },
  shared: [],
};

export const buildConfig = {
  modulePreload: false,
  target: "esnext" as const,
  minify: false,
  cssCodeSplit: false,
};

export const serverConfig = {
  port: 5006,
};

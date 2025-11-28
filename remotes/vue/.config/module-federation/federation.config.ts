/**
 * Module Federation Configuration for Vue Remote
 */

export const federationConfig = {
  name: "vueApp",
  filename: "remoteEntry.js",
  exposes: {
    "./App": "./src/vue-remote.ts",
  },
  shared: ["vue", "pinia"],
};

export const buildConfig = {
  modulePreload: false,
  target: "esnext" as const,
  minify: false,
  cssCodeSplit: false,
};

export const serverConfig = {
  port: 5005,
};

import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host-app",
      remotes: {
        shellApp: "http://localhost:5003/assets/remoteEntry.js",
        productsApp: "http://localhost:5001/assets/remoteEntry.js",
        contactApp: "http://localhost:5002/assets/remoteEntry.js",
        angularWebpack: "http://localhost:5004/remoteEntry.js",  // Webpack
        angularVite: "http://localhost:5006/assets/remoteEntry.js",  // Vite
        vueApp: "http://localhost:5005/assets/remoteEntry.js",
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
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5000,
  },
});

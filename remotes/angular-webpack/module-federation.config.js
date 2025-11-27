const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "angularWebpack",
  filename: "remoteEntry.js",
  exposes: {
    "./App": "./src/angular-remote.ts",
  },
  shared: shareAll({
    singleton: true,
    strictVersion: true,
    requiredVersion: "auto",
  }),
});


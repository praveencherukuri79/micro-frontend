/**
 * Webpack Configuration for Angular MF Host
 * Hosts don't need withModuleFederationPlugin - use ModuleFederationPlugin directly
 */
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const share = mf.share;

module.exports = {
  output: {
    uniqueName: "hostAngularMf",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "hostAngularMf",
      remotes: {
        productsApp: "productsApp@http://localhost:5001/assets/remoteEntry.js",
        contactApp: "contactApp@http://localhost:5002/assets/remoteEntry.js",
        angularWebpack: "angularWebpack@http://localhost:5004/remoteEntry.js",
        angularVite: "angularVite@http://localhost:5006/assets/remoteEntry.js",
        vueApp: "vueApp@http://localhost:5005/assets/remoteEntry.js",
      },
      shared: share({
        "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true },
        "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true },
        "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true },
        "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true },
        "rxjs": { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true },
        "rxjs/operators": { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true },
      })
    })
  ]
};

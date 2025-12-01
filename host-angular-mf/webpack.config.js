const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  output: {
    uniqueName: 'hostAngularMf',
    publicPath: 'auto',
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'hostAngularMf',
      remotes: {
        // Configure your remotes here
        // products: 'products@http://localhost:5001/remoteEntry.js',
        // contact: 'contact@http://localhost:5002/remoteEntry.js',
        // shell: 'shell@http://localhost:5003/remoteEntry.js',
        // angularWebpack: 'angularWebpack@http://localhost:5004/remoteEntry.js',
        // vue: 'vue@http://localhost:5005/remoteEntry.js',
        // angularVite: 'angularVite@http://localhost:5006/remoteEntry.js',
      },
      shared: {
        '@angular/core': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        '@angular/common': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        '@angular/router': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        rxjs: { singleton: true, strictVersion: true, requiredVersion: 'auto' },
      },
    }),
  ],
};


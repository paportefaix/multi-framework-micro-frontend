

const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:4200/",
    uniqueName: "shell"
  },
  optimization: {
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
        remotes: {
            'angular1': "angular1@http://localhost:4201/remoteEntry.js",
            'angular2': "angular2@http://localhost:4202/remoteEntry.js",
            'angular3': "angular3@http://localhost:4203/remoteEntry.js",
            'react1': "react1@http://localhost:4204/remoteEntry.js"
        },
        shared: ["@angular/core", "@angular/common", "@angular/router"]
    })
  ],
};

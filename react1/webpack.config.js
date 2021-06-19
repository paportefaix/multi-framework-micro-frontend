const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");


module.exports = options => {
  return {
    entry: './index.js',
    output: {
      filename: 'bundle.js',
      publicPath: "http://localhost:4204/",
      uniqueName: "react1"
    },
    module: {
      rules: [
        {
          test: /.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                presets: ['@babel/react', '@babel/env']
              }
            },
          ],
        },
      ],
    },
    plugins: [
      new ModuleFederationPlugin({
        
          // For remotes (please adjust)
          name: "react1",
          library: { type: "var", name: "react1" },
          filename: "remoteEntry.js",
          exposes: {
              './web-components': './app.js',
          },        

          shared: ["react", "react-dom"]
        })
    ],
    devServer: {
      port: 4204
    }
  }
}
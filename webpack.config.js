const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/app/index.html',
  filename: 'index.html',
  inject: 'body'
})
const nodeModulesDir  = path.resolve(__dirname, 'node_modules');

const config = {
  entry: [
    path.resolve(__dirname, 'src/app/index.js')
  ],
  output : {
    path     : path.resolve(__dirname, 'dist'),
    filename : 'bundle.js'
  },
  module: {
    loaders: [
      {
        test    : /\.js$/,
        loader  : 'babel-loader',
        exclude: [nodeModulesDir]
    }, {
        test    : /\.jsx$/,
        loader  : 'babel-loader',
        exclude: [nodeModulesDir]
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig],
  devServer: {
    port: 3000
  }
};

module.exports = config;
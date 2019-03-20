const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackConfig = require('./webpack.config');
const paths = require('./paths');

const port = '3000';
const appHtmlTitle = '';


module.exports = merge(webpackConfig, {
  devtool: 'cheap-module-eval-source-map',
  output: {
    pathinfo: true,
    publicPath: '/',
    path: paths.appBuild,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.appSrc, 'index.ejs'),
      title: appHtmlTitle,
    }),
  ],
  devServer: {
    host: '0.0.0.0',
    historyApiFallback: true,
    port,
  },
});

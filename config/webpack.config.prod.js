const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpackConfig = require('./webpack.config');
const paths = require('./paths');

const appHtmlTitle = '';


module.exports = merge(webpackConfig, {
  devtool: 'source-map',
  output: {
    publicPath: '/',
    path: paths.appBuild,
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.appSrc, 'index.ejs'),
      title: appHtmlTitle,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
});

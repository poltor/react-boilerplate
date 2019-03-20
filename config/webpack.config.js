const path = require('path');
const webpack = require('webpack');
const paths = require('./paths');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const IS_DEV = (process.env.NODE_ENV === 'dev');


module.exports = {
  entry: path.join(paths.appSrc, 'index.jsx'),
  resolve: {
    modules: [paths.nodeModules, paths.appSrc, paths.appAssets],
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.DefinePlugin({ IS_DEV }),
  ],
  module: {
    rules: [
      // Babel
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        options: {
          compact: true,
        },
      },

      // React
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        options: {
          compact: true,
          presets: [
            "@babel/preset-env",
            "@babel/preset-react"
          ],
        },
      },

      // Styles
      {
        test: /\.scss$/,
        loader: [
          {
            loader: IS_DEV ? 'style-loader' : MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
        exclude: /(node_modules)/,
      },

      {
        test: /\.css$/,
        loader: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
        // exclude: /(node_modules)/,
      },
    ],
  },
};

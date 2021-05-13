const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const paths = require('./paths');
const { ANALYZE_MODE } = process.env;

module.exports = {
  context: paths.src,
  entry: ['babel-polyfill', './index.js'],
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        PROD_ENV: process.env.NODE_ENV === 'production',
        BUILD_DATE: Date.now(),
      },
      API_HOST: JSON.stringify(process.env.API_HOST),
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.assets,
          to: 'assets',
          globOptions: {
            ignore: ['**.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
    }),
    ...(ANALYZE_MODE ? [new BundleAnalyzerPlugin()] : []),
  ],
  module: {
    rules: [
      { test: /\.js$/, use: ['babel-loader'] },
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
    ],
  },
  resolve: {
    alias: {
      API: paths.api,
      CONSTANTS: paths.constants,
      STORE: paths.store,
      PAGES: paths.pages,
      THEME: paths.theme,
      'UI-KIT': paths.uikit,
      COMPONENTS: paths.components,
      HOOKS: paths.hooks,
      UTILS: paths.utils,
    },
  },
  stats: {
    assets: false,
    children: false,
    chunks: false,
    cached: false,
    hash: false,
    modules: false,
    publicPath: false,
    timings: true,
    version: false,
    warnings: true,
    colors: {
      green: '\u001b[32m',
    },
    ...(ANALYZE_MODE && { assets: true, chunks: true }),
  },
};

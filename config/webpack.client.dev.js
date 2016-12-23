const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const webpack = require('webpack')
const webpackBaseConfig = require('./webpack.base')
const path = require('./path')

module.exports = merge(webpackBaseConfig, {
  // eval-source-map is faster for development
  devtool: '#eval-source-map',
  debug: true,
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: path.output.index,
      template: path.asset.index,
      inject: true,
    }),
  ]
})

var path = require('./path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const filename = (process.env.NODE_ENV === 'production') ? '[name].[contenthash].css' : 'style.css'
module.exports = {
  target: 'node',
  devtool: 'inline-source-map',
  entry: [
    path.asset.entry.server
  ],
  devtool: 'source-map',
  output: {
    path: path.output.path,
    publicPath: path.output.public,
    filename: `[name].[hash].js`
  },
  resolve: {
    // Extensions to support if excluded from path
    extensions: ['', '.js', '.jsx', '.scss'],
    fallback: [path.nodeModules],
    // https://github.com/JSainsburyPLC/vue-webpack/blob/master/template/doc/structure.md#aliases
    alias: path.alias,
  },
  resolveLoader: {
    fallback: [path.nodeModules],
  },
  plugins: [
    new ExtractTextPlugin(filename, {
      allChunks: true
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')}),
    new webpack.optimize.DedupePlugin() //,
    // new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true          
        }
      },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract("css", "sass") },
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style", "css") }
    ]
  }
}

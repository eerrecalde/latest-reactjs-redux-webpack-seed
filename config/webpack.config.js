var path = require('./path')
var webpack = require('webpack')

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.asset.entry.client
  ],
  output: {
    path: path.output.path,
    publicPath: path.output.public,
    filename: 'bundle.js'
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
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        exclude: /node_modules/,
        include: path.root,
        query: {
          presets: [ 'react-hmre' ]
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'sass'],
      },
      {
        test: /\.css$/,
        loaders: ['css', 'style'],
      }
    ]
  }
}

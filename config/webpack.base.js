const path = require('./path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const filename = (process.env.NODE_ENV === 'production') ? '[name].[contenthash].css' : 'style.css'
module.exports = {
  entry: [
    path.asset.entry.client
  ],
  node: {
    fs: "empty"
  },
  output: {
    path: path.output.path,
    publicPath: '',
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  resolve: {
    // Extensions to support if excluded from path
    extensions: ['', '.js', '.jsx', '.scss'],
    fallback: [path.nodeModules],
    alias: path.alias,
  },
  resolveLoader: {
    fallback: [path.nodeModules],
  },

  module: {
    preLoaders: [
      // Loader for automatic Eslint during development and build
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        include: path.root,
        exclude: /node_modules/,
      },
    ],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        include: path.root,
        exclude: /node_modules/,
        query: {
          cacheDirectory: true
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("css!sass"),
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loaders: [
          `url-loader?limit=1&name=${
            path.output.getAssetPosixPath('images/[name].[hash:7].[ext]')
          }`,
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
        ],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 1,
          name: path.output.getAssetPosixPath('fonts/[name].[ext]?[hash]'),
        },
      },
    ]
  },
  plugins: [
    // extract css into its own file
    new ExtractTextPlugin(path.output.getAssetPosixPath('css/[name].[contenthash].css')),
  ],
}

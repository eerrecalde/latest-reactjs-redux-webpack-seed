var path = require('./path')

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
    publicPath: (process.env.NODE_ENV === 'gh') ? '/latest-reactjs-redux-webpack-seed' : path.output.public,
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
      { test: /\.scss$/, loaders: ["css", "sass"] },
      { test: /\.css$/, loaders: ["style", "css"] },
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
  }
}

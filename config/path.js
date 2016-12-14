const { join, posix } = require('path');

const root = join(__dirname, '../');
const common = join(__dirname, '../common');

module.exports = {
  root,
  common,
  nodeModules: join(__dirname, '../node_modules'),
  alias: {
    '@api': join(common, 'api'),
    '@asset': join(common, 'asset'),
    '@component': join(common, 'component'),
    '@constant': join(common, 'constant'),
    '@directive': join(common, 'directive'),
    '@entry': join(common, 'entry'),
    '@helper': join(common, 'helper'),
    '@mixin': join(common, 'mixin'),
    '@router': join(common, 'router'),
    '@store': join(common, 'store'),
    '@style': join(common, 'style'),
    '@view': join(common, 'view')
  },
  asset: {
    index: join(common, 'index.html'),
    favicon: join(common, 'asset/favicon.png'),
    static: join(common, 'static'),
    client_info: join(root, 'dist/client_info.json'),
    entry: {
      client: join(root, 'client/index'),
      server: join(root, 'server/server'),
    },
  },
  output: {
    asset: join(root, 'dist/asset'),
    index: join(
      root,
      'dist/index.html'
    ),
    path: join(root, 'dist'),
    server: join(root, 'dist/server.js'),
    public: '/',
    getAssetPosixPath(subpath) {
      return posix.join('asset', subpath);
    },
  },
  proxy: {
  },
  unit: {
    root: join(root, 'test/unit'),
    alias: {
      '@unit': join(root, 'test/unit'),
    },
  },
};

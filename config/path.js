const { join, posix } = require('path');

const root = join(__dirname, '../');
const src = join(__dirname, '../src');

module.exports = {
  root,
  src,
  nodeModules: join(__dirname, '../node_modules'),
  alias: {
    $vue: 'vue/dist/vue.common.js',
    '@api': join(src, 'api'),
    '@asset': join(src, 'asset'),
    '@component': join(src, 'component'),
    '@constant': join(src, 'constant'),
    '@directive': join(src, 'directive'),
    '@entry': join(src, 'entry'),
    '@helper': join(src, 'helper'),
    '@mixin': join(src, 'mixin'),
    '@router': join(src, 'router'),
    '@store': join(src, 'store'),
    '@style': join(src, 'style'),
    '@view': join(src, 'view'),
  },
  asset: {
    index: join(root, 'index.html'),
    favicon: join(root, 'asset/favicon.png'),
    static: join(root, 'static'),
    entry: {
      client: join(root, 'client/index'),
      server: join(root, 'server/index'),
    },
  },
  output: {
    asset: join(root, 'dist/asset'),
    index: join(
      root,
      `/dist/${process.env.NODE_ENV === 'production' ? '' : '_'}index.html`
    ),
    path: join(root, 'dist'),
    server: join(root, 'dist/server.js'),
    public: '/static/',
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

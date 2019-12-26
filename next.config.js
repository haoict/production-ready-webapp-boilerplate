const withLess = require('@zeit/next-less');
const withCss = require('@zeit/next-css');
const { ANALYZE, ASSET_HOST } = process.env;

// for those who using CDN
const assetPrefix = ASSET_HOST || '';

module.exports = withCss(
  withLess({
    assetPrefix,
    // only for dev
    onDemandEntries: {
      maxInactiveAge: 1000 * 30 * 60,
      pagesBufferLength: 10
    },
    webpack: (config, { dev }) => {
      config.node = { fs: 'empty' };
      config.output.publicPath = `${assetPrefix}${config.output.publicPath}`;
      if (ANALYZE) {
        const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerPort: 8888,
            openAnalyzer: true
          })
        );
      }
      return config;
    }
  })
);

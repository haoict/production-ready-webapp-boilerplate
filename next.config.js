const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
  // for Next.js ONLY
  nextjs: {
    localIdentNameFollowDev: true, // default false, for easy to debug on PROD mode
  },

  // Other Config Here...

  webpack(config) {
    config.resolve.fallback = { fs: false, path: false, stream: false, constants: false };
    return config;
  },
});

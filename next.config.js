const withLess = require('@zeit/next-less');
const withPWA = require('next-pwa');

module.exports = withLess(
  withPWA({
    pwa: {
      register: false,
      skipWaiting: false,
      dest: 'public'
    },
    // only for dev
    onDemandEntries: {
      maxInactiveAge: 1000 * 30 * 60,
      pagesBufferLength: 10
    },
    webpack: config => {
      config.node = { fs: 'empty' };
      return config;
    }
  })
);

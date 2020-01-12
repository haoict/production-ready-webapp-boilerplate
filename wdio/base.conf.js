const hook = require('css-modules-require-hook');
const { getImageComparisonServiceConfig } = require('./utils')
const { PLATFORM }  = require('./utils');

exports.baseConfig = {
  runner: 'local',
  hostname: process.env.WDIO_HOST || '127.0.0.1',
  specs: ['**/stories/vr-test/**/index.spec.js'],
  exclude: [
    // 'path/to/excluded/files'
  ],
  maxInstances: 1,
  services: [getImageComparisonServiceConfig(PLATFORM.desktop)],
  sync: true,
  logLevel: 'error',
  deprecationWarnings: true,
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 10000,
  connectionRetryCount: 3,
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    retries: 2,
    require: ['@babel/register']
  },
  before: function(capabilities, specs) {},
  beforeSession: function() {
    /*
     * When runs the test, it doesn't understand `.less` syntax
     * So before running test, need to pre-compile the `.less`
     */
    hook({
      extensions: '.less',
    });
  },
};
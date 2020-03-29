const { baseConfig } = require('./base.conf');
const { getImageComparisonServiceConfig, getChromeConfig } = require('./utils');
const { PLATFORM }  = require('./utils');

const chromeConfig = getChromeConfig();

exports.config = {
  ...baseConfig,
  port: parseInt(process.env.WDIO_PORT || 4445),
  capabilities: [chromeConfig],
  services: [getImageComparisonServiceConfig(PLATFORM.smartphone)],
  before: function() {
    baseConfig.before();
    /*
     * The size of iPhone 6
     */
    browser.setWindowSize(375, 687);
  },
};
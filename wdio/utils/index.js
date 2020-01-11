const PLATFORM = {
  desktop: 'desktop',
  smartphone: 'smartphone',
  tablet: 'tablet',
};

/**
 * Get config of "image-comparison" service
 * @platform could be "desktop" - "smartphone" - "tablet"
 */
 function getImageComparisonServiceConfig(platform) {
  return [
    // (see https://github.com/wswebcreation/webdriver-image-comparison/blob/master/docs/OPTIONS.md#method-options)
    'image-comparison',
    {
      formatImageName: `${platform}-{browserName}-{tag}`,
      clearRuntimeFolder: true,
      savePerInstance: false,
      autoSaveBaseline: true,
      blockOutStatusBar: true,
      blockOutToolBar: true,
      disableCSSAnimation: true,
    },
  ];
}

function getChromeConfig() {
  return {
    maxInstances: 1,
    browserName: 'chrome',
    'goog:chromeOptions': {
      // (see https://developers.google.com/web/updates/2017/04/headless-chrome)
      args: ['--disable-gpu'],
    },
  };
}

module.exports = {
  PLATFORM,
  getChromeConfig,
  getImageComparisonServiceConfig,
};
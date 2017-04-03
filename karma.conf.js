module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      'src/**/*.spec.jsx'
    ],
    exclude: [],
    preprocessors: {
      'src/**/*.spec.jsx': ['webpack'],
    },
    reporters: ['mocha', 'saucelabs'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome', 'PhantomJS', 'sl_ie_11'],
    singleRun: true,
    webpack: require('./webpack.config.js'),
    webpackMiddleware: {
      noInfo: true
    },
    sauceLabs: {
      testName: 'Sample Unit Tests'
    },
    browserNoActivityTimeout: 60000,
    captureTimeout: 120000,
    customLaunchers: {
        sl_ie_11: {
          base: 'SauceLabs',
          browserName: 'internet explorer',
          platform: 'Windows 8.1',
          version: '11'
        }
    }
  });
};

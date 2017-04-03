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
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: [/*'Chrome', */'PhantomJS'],
    singleRun: true,
    webpack: require('./webpack.config.js'),
    webpackMiddleware: {
      noInfo: true
    }
  });
};

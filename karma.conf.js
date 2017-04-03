module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'src/**/*.spec.js'
    ],
    exclude: [],
    preprocessors: {
      'src/**/*.spec.js': ['webpack'],
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

// Karma configuration
// Generated on Thu Mar 07 2019 13:02:17 GMT+0300 (East Africa Time)

module.exports = function(config) {
  'use strict';

  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '.',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine-jquery','jasmine'],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      // '*Fixture.html': ['html2js']
      '**/*.html': ['html2js']
    },


    // list of files / patterns to load in the browser
    files: [
        
        { // Source files
            pattern: 'js-src/*.js',
            watched: true,
            served: true,
            included: true
        },
        
        { // Spec files
            pattern: 'js-test/**/*Spec.js',
            watched: true,
            served: true,
            included: true
        },
        
        { // fixtures
            pattern: 'js-test/**/*Fixture.html',
            watched: true,
            included: false,
            served: true
        },

        // plugins
        'js-test/**/plugins/*.js',

        // '*html'
    ],


    // configuration for converting markup files into js strings
    html2Jspreprocessor: {
        stripPrefix: 'public',
        prependPrefix: 'served',
        processPath: function(filePath){
          return filePath.replace(/\.html$/,'');
        }
    },


    // list of files / patterns to exclude
    exclude: [
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // Which plugins to enable
    plugins: [
      'karma-jasmine',
      'karma-jasmine-jquery',
      'karma-chrome-launcher',
      'karma-html2js-preprocessor',
    ],

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
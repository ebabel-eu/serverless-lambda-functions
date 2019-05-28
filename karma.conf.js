// module.exports = function (config) {
//   config.set({
//     basePath: '',
//     frameworks: ['jasmine'],
//     files: [
//       'api.js',
//       'controllers/*.js',
//       'spec/*.spec.js',
//       'spec/**/*.spec.js'
//     ],
//     preprocessors: {
//       'api.js': ['coverage'],
//       'controllers/*.js': ['coverage']
//     },
//     plugins: [
//       'karma-jasmine',
//       'karma-phantomjs-launcher',
//       'karma-coverage'
//     ],
//     reporters: ['progress', 'coverage'],
//     port: 9878,
//     colors: true,
//     logLevel: config.LOG_DEBUG,
//     autowatch: true,
//     browsers: ['PhantomJS'],
//     singleRun: false,
//     concurrency: Infinity,
//     coverageReporter: {
//       includeAllSources: true,
//       dir: 'coverage/',
//       reporters: [
//         { type: "html", subdir: "html" },
//         { type: 'text-summary' }
//       ]
//     }
//   });
// };


module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'api.js',
      'controllers/*.js',
      'spec/*.spec.js',
      'spec/**/*.spec.js'
    ],
    preprocessors: {
      'api.js': ['babel'],
      'controllers/*.js': ['babel'],
      'spec/*.spec.js': ['babel'],
      'spec/**/*.spec.js': ['babel']
    },
    plugins: [
      'karma-jasmine',
      'karma-phantomjs-launcher',
      'karma-coverage',
      'karma-babel-preprocessor'
    ],
    reporters: ['progress', 'coverage'],
    port: 9878,
    colors: true,
    logLevel: config.LOG_DEBUG,
    autowatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity,
    coverageReporter: {
      includeAllSources: true,
      dir: 'coverage/',
      reporters: [
        { type: "html", subdir: "html" },
        { type: 'text-summary' }
      ]
    },
    babelPreprocessor: {
      options: {
        presets: ['@babel/preset-env'],
        sourceMap: 'inline'
      },
      filename: function (file) {
        return file.originalPath.replace(/\.js$/, '.es5.js');
      },
      sourceFileName: function (file) {
        return file.originalPath;
      }
    }
  });
};
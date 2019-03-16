module.exports = function(config) {
    config.set({
        browsers: ['ChromeHeadless'],
        frameworks: ['parallel', 'jasmine'],
        files: [
            'src/detectAB.js',
            'test/**/*.spec.js'
        ]
    });
};
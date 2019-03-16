module.exports = function(config) {
    config.set({
        browsers: ['ChromeHeadless'],
        frameworks: ['parallel', 'jasmine'],
        files: [
            'dist/detectAB.js',
            'test/**/*.spec.js'
        ]
    });
};
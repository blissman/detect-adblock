// gulp
const gulp = require('gulp');
// clean
const del = require('del');
// eslint
const eslint = require('gulp-eslint');
const eslintConfig = {
    "env": {
        "browser": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 6
    },
    // See https://eslint.org/docs/rules/ for rules
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": 0, // allow console.log etc
        "no-extra-boolean-cast": 0, // allow using !! to cast to boolean
        "no-unused-vars": ["error",
            {
                "vars": "all", // no unused variables in any scope
                // allow trailing unused args since functions may be called with
                // them even if they aren't used in the function
                "args": "none"
            }
        ],
        "no-trailing-spaces": ["error"],
        "curly": ["error"],
        "no-extend-native": ["error"],
        "prefer-const": ["error"]
    }
};
// babel
const babel = require('gulp-babel');
// uglify (js)
const uglify = require('gulp-uglify');
const pump = require('pump');
// karma
const Server = require('karma').Server;

/*
    clean task - remove existing dist folder and its contents
*/
gulp.task('clean:dist', function() {
    return del([
        'dist/**/*',
    ]);
});

/*
    ESLint task
*/
gulp.task('lint', function() {
    return gulp.src('src/*.js').pipe(eslint(eslintConfig))
        .pipe(eslint.format())
        // Brick on failure to be super strict
        .pipe(eslint.failOnError());
});

/*
    gulp-babel task
*/
gulp.task('babel', () =>
    gulp.src('src/*.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(gulp.dest('dist'))
);

/*
    gulp-uglify (js) task
*/
gulp.task('uglify-js', function(callback) {
    pump([
            gulp.src('dist/*.js'),
            uglify(),
            gulp.dest('dist')
        ],
        callback
    );
});

/*
    karma tasks
*/
gulp.task('test', function(done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done()).start();
});

gulp.task('tdd', function(done) {
    new Server({
        configFile: __dirname + '/karma.conf.js'
    }, done()).start();
});

gulp.task('default', gulp.series(gulp.parallel('clean:dist', 'lint'), 'babel', 'uglify-js', 'test'));
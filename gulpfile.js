var ghPages = require('gulp-gh-pages');
var gulp = require('gulp');
var clean = require('gulp-clean');
var webpack = require('webpack-stream');
var rename = require('gulp-rename');
var argv = require('yargs').argv;
var gulpIgnore = require('gulp-ignore');


var getWebpackConfig = require('./webpack.config.js');

var strategy = {
    minify: false,
    destination: './',
}


function copyToBuildFile(fileName) {
    gulp.src('./' + fileName)
        .pipe(gulp.dest(strategy.destination));
}

gulp.task('defineStrategy', function() {

    if (argv.minify)
        strategy.minify = true;
    if (argv.destination)
        strategy.destination = argv.destination;

});

gulp.task('cleanDest', ['defineStrategy'], function () {

    return gulp.src(strategy.destination + '/*', { read: false })
        .pipe(gulpIgnore.exclude('Web.config'))
        .pipe(clean());

});


gulp.task('copyFilesToDest', ['defineStrategy', 'cleanDest'], function () {
    copyToBuildFile('src/index.html');
});

gulp.task('build', ['defineStrategy', 'cleanDest','copyFilesToDest' ], function () {

    gulp.src('./src/app.js')
      .pipe(webpack(getWebpackConfig(strategy.minify)))
      .pipe(rename('bundle.js'))
      .pipe(gulp.dest(strategy.destination));

});

gulp.task('deploy', function() {
    return gulp.src('./dev/**/*')
        .pipe(ghPages());
});





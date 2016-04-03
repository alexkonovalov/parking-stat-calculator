
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

gulp.task('defineStrategy', function() {

    if (argv.minify)
        strategy.minify = true;
    if (argv.destination)
        strategy.destination = argv.destination;

});

gulp.task('cleanWp', ['defineStrategy'], function () {

    return gulp.src('bundle.js', { read: false })
		.pipe(clean());

});

gulp.task('wp', ['cleanWp', 'defineStrategy'], function () {

   return gulp.src('./app.js')
      .pipe(webpack(getWebpackConfig(strategy.minify)))
      .pipe(rename('bundle.js'))
      .pipe(gulp.dest(''));
});


gulp.task('cleanDest', ['defineStrategy'], function () {

    return gulp.src(strategy.destination + '/*', { read: false })
        .pipe(gulpIgnore.exclude('Web.config'))
		.pipe(clean({ force: true /*to clean outside workin dir*/}));

});

function copyToBuildDir(directoryName) {
    gulp.src('./' + directoryName + '/*')
        .pipe(gulp.dest(strategy.destination + directoryName + '/'));
}

function copyToBuildFile(fileName) {
    gulp.src('./' + fileName)
        .pipe(gulp.dest(strategy.destination));
}

gulp.task('copyToDest', ['defineStrategy', 'cleanDest', 'wp'], function () {

    copyToBuildFile('index.html');
    copyToBuildFile('bundle.js');
});


gulp.task('copydir', ['defineStrategy','copyToDest']);
gulp.task('cleandir', ['defineStrategy', 'cleanDest']);


gulp.task('intermediate-build', ['defineStrategy', 'wp']);

gulp.task('build', ['defineStrategy', 'intermediate-build', 'cleanDest', 'copyToDest']);






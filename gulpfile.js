/**
 * Created by jgluhov on 01/02/16.
 */
var gulp = require('gulp'),
	stylus = require('gulp-stylus'),
	koutoSwiss = require('kouto-swiss'),
	sourcemaps = require('gulp-sourcemaps'),
	path = require('path');

gulp.task('styles', function() {
	gulp.src('./src/app.styl')
		.pipe(sourcemaps.init())
		.pipe(stylus({
			compress: false,
			use: koutoSwiss(),
			import: ['kouto-swiss']
		}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./assets'))
});

gulp.task('default', ['styles'], function () {
	gulp.watch('./src/app.styl', ['styles']);
});

console.log(path.resolve('src', 'app.styl'));
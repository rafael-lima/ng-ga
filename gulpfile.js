'use strict';

// ============================================================================
// -> @require: Gulp and Gulp Plugins
// ============================================================================

// Include the Gulp

var gulp = require('gulp');

// Include the gulp plugins

var watch   = require('gulp-watch');
var ngmin   = require('gulp-ngmin');
var uglify  = require('gulp-uglify');
var rename  = require('gulp-rename');
var jshint  = require('gulp-jshint');
var stylish = require('jshint-stylish');

// The scripts path

var scriptPath = {
	src: './src/ng-ga.js',
	out: './out/'
};

// ============================================================================
// -> @task: BUILD | @plugins: rename, ngmin, uglify
// ============================================================================

gulp.task('build', function () {

	return gulp.src(scriptPath.src)
		.pipe(rename('ng-ga.min.js'))
		.pipe(ngmin())
		.pipe(uglify())
		.pipe(gulp.dest(scriptPath.out))
	;

});

// ============================================================================
// -> @task: WATCH | @plugins: watch
// ============================================================================

gulp.task('watch', function () {

	return gulp.src(scriptPath.src)
		.pipe(watch())
		.pipe(gulp.dest(scriptPath.out))
	;

});

// ============================================================================
// -> @task: LINT | @plugins: jshint, jshint-stylish
// ============================================================================

gulp.task('lint', function () {

	return gulp.src(scriptPath.src)
		.pipe(jshint())
		.pipe(jshint.reporter(stylish))
		.pipe(jshint.reporter('fail'))
	;

});

// Task default: watch, build

gulp.task('default', ['watch', 'build']);
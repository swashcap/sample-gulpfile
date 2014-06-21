/* global require */
'use strict';

var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var jshintStylish = require('jshint-stylish');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');

gulp.task('styles', function () {
  return gulp.src('assets/css/scss/main.scss')
    .pipe(sass({
      style: 'compressed',
      precision: 10
    }))
    .pipe(autoprefixer('last 2 version', 'ie 9'))
    .pipe(gulp.dest('assets/css/'));
});

gulp.task('scripts', function () {
  gulp.src(['gulpfile.js', 'assets/js/**/*.js', '!assets/js/**/*.min.js'])
    .pipe(jshint())
    .pipe(jshint.reporter(jshintStylish));

  return gulp.src('assets/js/app.js')
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('assets/js/'));
});

gulp.task('images', function () {
  gulp.src('assets/img/**/*.{png,jpg,jpeg,gif}')
    .pipe(imagemin())
    .pipe(gulp.dest('assets/img/'));
});

gulp.task('default', ['styles', 'scripts', 'images']);

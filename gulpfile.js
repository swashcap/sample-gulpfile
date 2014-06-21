'use strict';

var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function () {
  return gulp.src('assets/css/scss/main.scss')
    .pipe(sass({
      style: 'compressed',
      precision: 10
    }))
    .pipe(autoprefixer('last 2 version', 'ie 9'))
    .pipe(gulp.dest('assets/css/'));
});

gulp.task('default', ['styles']);

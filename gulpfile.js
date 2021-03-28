'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());

});
 
gulp.task('sass:watch', function () {
  gulp.watch('./css/**/*.scss', ['sass']);
});

gulp.task('serve', gulp.series(['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./css/*.scss", gulp.series(['sass']));
    gulp.watch(". /index.html").on('change', browserSync.reload);
    gulp.watch("./src/*.js").on('change', browserSync.reload);

}));

gulp.task('default', gulp.series(['serve']));

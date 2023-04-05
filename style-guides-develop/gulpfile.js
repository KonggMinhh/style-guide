const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
var sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const useref = require('gulp-useref');
const gulpif = require('gulp-if');
const csso = require('gulp-csso');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  return gulp
  .src('scss/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({
    style: 'compressed',
    errLogToConsole: false,
    onError: function(err) {
        return notify().write(err);
    }
}))
  .pipe(autoprefixer(['last 15 versions','> 1%','ie 8','ie 7','iOS >= 9','Safari >= 9','Android >= 4.4','Opera >= 30'], {
    cascade: true
  }))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('css/'))
});

gulp.task('watch', function () {
  gulp.watch('scss/**/*.scss', gulp.series('sass', 'reload'));
});

gulp.task('reload', function (done) {
  browserSync.reload();
  done();
});

gulp.task('serve', function () {
  browserSync.init({
    server: '.',
    index: 'index.php'
  });
});

gulp.task('reload', function (done) {
  browserSync.reload();
  done();
});

gulp.task('dev', gulp.parallel('watch'));

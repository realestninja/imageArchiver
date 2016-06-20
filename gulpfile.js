var gulp = require('gulp');
var jshint = require('gulp-jshint');
var babel = require('gulp-babel');

gulp.task('default', function() {
  return gulp.src('src/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist/scripts'));
});
var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

var sourceFiles = [
  'token.js',
  'imageArchiver.js'
];

gulp.task('default', function() {
  return gulp.src(sourceFiles)
  .pipe(sourcemaps.init())
  .pipe(concat('main.js'))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('.'));
});
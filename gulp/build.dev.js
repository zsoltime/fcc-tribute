const gulp = require('gulp');

gulp.task('build:dev', [
  'clean:temp',
  'scripts',
  'styles',
  'pugToHTML',
  'copy:images',
]);

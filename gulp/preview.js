const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('preview:dist', ['build:dist'], () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'dist',
    },
  });
});

gulp.task('preview:temp', ['build:dev'], () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'src/temp',
    },
  });
});

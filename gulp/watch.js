const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();

const reload = browserSync.reload;

gulp.task('watch', ['build:dev'], () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'src/temp',
    },
  });

  watch('./src/pug/**/*.pug', () => {
    gulp.start('htmlRefresh');
  });

  watch('./src/scripts/**/*.js', () => {
    gulp.start('scriptsRefresh');
  });

  watch('./src/styles/**/*.sass', () => {
    gulp.start('cssInject');
  });
});

gulp.task('cssInject', ['styles'], () => (
  gulp.src('./src/temp/css/style.css')
    .pipe(browserSync.stream())
));

gulp.task('htmlRefresh', ['pugToHTML'], () => { reload(); });
gulp.task('scriptsRefresh', ['scripts'], () => { reload(); });

gulp.task('watch:pug', ['pugToHTML'], () => (
  watch('./src/pug/**/*.pug', () => gulp.start('pugToHTML'))
));

const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const usemin = require('gulp-usemin');
const rev = require('gulp-rev');

gulp.task('copyGeneralFiles', ['clean:dist'], () => (
  gulp.src([
    './src/**/*',
    '!./src/images',
    '!./src/images/**',
    '!./src/pug',
    '!./src/pug/**',
    '!./src/scripts',
    '!./src/scripts/**',
    '!./src/styles',
    '!./src/styles/**',
    '!./src/temp',
    '!./src/temp/**',
  ])
    .pipe(gulp.dest('./dist'))
));

gulp.task('optimizeImages', ['clean:dist'], () => (
  gulp.src([
    './src/images/**/*',
    '!./src/images/icons',
    '!./src/images/icons/**/*',
  ])
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      multipass: true,
    }))
    .pipe(gulp.dest('./dist/images'))
));

gulp.task('useminTrigger', ['clean:dist'], () => {
  gulp.start('usemin');
});

gulp.task('usemin', ['pugToHTML', 'styles', 'scripts:dist'], () => (
  gulp.src('./src/temp/index.html')
    .pipe(usemin({
      css: [
        () => rev(),
        () => cleanCSS(),
      ],
      js: [
        () => rev(),
      ],
    }))
    .pipe(gulp.dest('./dist'))
));

gulp.task('build:dist', [
  'clean:dist',
  'copyGeneralFiles',
  'optimizeImages',
  'useminTrigger',
]);

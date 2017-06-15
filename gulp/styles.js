const gulp = require('gulp');
const postCSS = require('gulp-postcss');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');

const postCSSPlugins = [
  autoprefixer,
];

gulp.task('styles', () => (
  gulp.src('./src/styles/style.sass')
    .pipe(sourcemaps.init())
    .pipe(sass()
      .on('error', sass.logError))
    .pipe(postCSS(postCSSPlugins))
    .on('error', function onError(err) {
      console.error(err.toString());
      this.emit('end');
    })
    // .pipe(rename({ extname: '.css' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./src/temp/css'))
));

const gulp = require('gulp');
const del = require('del');

gulp.task('clean:temp', () => del('./src/temp'));
gulp.task('clean:dist', () => del('./dist'));

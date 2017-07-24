const gulp = require('gulp');
const del = require('del');

gulp.task('clean:temp', () => del.sync('./src/temp'));
gulp.task('clean:dist', () => del.sync('./dist'));

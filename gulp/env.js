const gulp = require('gulp');

gulp.task('env:dev', () => { process.env.NODE_ENV = 'development'; });
gulp.task('env:prod', () => { process.env.NODE_ENV = 'production'; });

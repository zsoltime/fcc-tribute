const gulp = require('gulp');
const webpack = require('webpack');
const config = require('../webpack.config.js');

const compile = (callback) => {
  webpack(config, (err, stats) => {
    if (err) {
      console.log(err.toString());
    }
    console.log(stats.toString());
    callback();
  });
};

gulp.task('scripts', ['env:dev'], compile);
gulp.task('scripts:dist', ['env:prod'], compile);

const gulp = require('gulp');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
const webpackConfigProd = require('../webpack.prod.config.js');

gulp.task('scripts', (callback) => {
  webpack(webpackConfig, (err, stats) => {
    if (err) {
      console.log(err.toString());
    }
    console.log(stats.toString());
    callback();
  });
});

gulp.task('scripts:dist', (callback) => {
  webpack(webpackConfigProd, (err, stats) => {
    if (err) {
      console.log(err.toString());
    }
    console.log(stats.toString());
    callback();
  });
});

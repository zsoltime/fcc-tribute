const path = require('path');
const webpack = require('webpack');

const isDev = process.env.NODE_ENV === 'development';

const config = {
  entry: {
    main: './src/scripts/main.js',
    vendor: './src/scripts/vendor.js',
  },
  output: {
    path: path.join(__dirname, './src/temp/js'),
    filename: '[name].js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      loaders: [
        'babel-loader',
      ],
      exclude: /node_modules/,
    }],
  },
};

if (isDev) {
  config.module.rules.loaders.push('eslint-loader');
} else {
  config.plugins = [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(isDev ? 'development' : 'production'),
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: true,
      },
      output: {
        comments: false,
        screw_ie8: true,
      },
      sourceMap: false,
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
  ];
}

module.exports = config;

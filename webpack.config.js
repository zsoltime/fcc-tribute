const path = require('path');

module.exports = {
  entry: {
    main: './src/scripts/main.js',
    vendor: './src/scripts/vendor.js',
  },
  output: {
    path: path.join(__dirname, './src/temp/js'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: [
          'babel-loader',
          'eslint-loader',
        ],
        exclude: /node_modules/,
      },
    ],
  },
};

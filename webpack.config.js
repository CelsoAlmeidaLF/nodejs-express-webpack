const path = require('path');

module.exports = {
  entry: "./src",
  output: {
    path: '/',
    filename:'bundle.js',
  },
  devtool:'source-map',
  module: {
    rules:
    [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader:  'babel-loader',
          options: { presets: [ '@babel/preset-env' ] }
        }
      }
    ]
  }
};

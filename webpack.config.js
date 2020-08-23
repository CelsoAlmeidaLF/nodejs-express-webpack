const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // mode: 'development',
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    })
],
  output: {
    filename:'js/index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: []
  }
};

const path = require('path');

module.exports = {
  // mode: 'development',
  entry: './src/js/index.js',
  plugins: [],
  output: {
    filename:'js/index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: []
  }
};

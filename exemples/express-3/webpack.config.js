const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js',
  plugins: [
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: './src/index.html'
    // }),
    new MiniCssExtractPlugin({
      filename: 'css/style.css'
  })
],
  output: {
    filename:'js/index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
    ]
  }
};

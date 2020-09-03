const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

  entry: { app: [ "@babel/polyfill", "./src/app/index.js" ], },

  output:{
    filename: "js/app.bundle.js",
    path: path.resolve(__dirname, "build"),
  },

  devServer: {
    port: 4000
  },

  module: {
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader"
        },
        {
          test: /\.css$/,
          use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
        }]
  },

  plugins: [
    new HtmlWebpackPlugin({
        template: "./src/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "css/app.bundle.css"
    })
  ]
}

const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  
  mode: 'development',

  context: __dirname,

  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './src/js/client.js'],

  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'js/bundle.js'
  },

  devtool: '#source-map',

  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
      },
      {
        test:/.\.js$/,
        exclude:/node_modules/,
        use: {
            loader: 'babel-loader',
            options: { presets:['@babel/preset-env'] }
        }
      }
      // {
      //   test:/\.(jpe?g|png|gif|svg)$/i,
      //   loader: 'file-loader',
      //   options: {
      //     name: '[name].[ext]'
      //   }
      // }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/style.css'
    })
  ],

};

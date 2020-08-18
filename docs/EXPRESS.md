# EXPRESS NODEJS

  Comando de intalação do plugin `webpack-dev-middleware`

```sh

$ npm i -D webpack-dev-middleware

```
  Código do `express` no arquivo raiz `index.js`.

```js

const express = require('express');
const app = express();

// webpack
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config');

// middleware
app.use(webpackDevMiddleware(webpack(webpackConfig)));

// static public
app.use(express.static(__dirname + '/public'));

app.listen(3000, () => {
  console.log('server on port 3000')
});

```

  Código de configuração do arquivo `webpack.config.js`.

```js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename:'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'source-map',
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
      {
        test:/\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/style.css'
    })
  ]
};

```

# WEBPACK

  Novo arquivo: `webpack.config.js`

```sh

$ touch webpack.config.js

```
  Código do arquivo `webpack.config.js`

```js

const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename:'main.js',
    path: path.resolve(__dirname, 'dist'),
  }
};

```

### Plugin-Html

  Comando de instalação do plugin-html.

```sh

$ npm i -D html-webpack-plugin

```

Código de configuração do plugin-html.

```js

const HtmlWebpackPlugin = require('html-webpack-plugin');

plugins: [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: './src/index.html'
  })
]

```

### Plugin-Css

  Comando de instalação do plugin-css.

```sh

$ npm i -D node-sass sass-loader style-loader css-loader mini-css-extract-plugin

```

  Código de configuração do plugin-css.

```js

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
    }
  ]
},

plugins: [
  new MiniCssExtractPlugin({
    filename: 'style.css'
  })
]


```

### Plugin-Babel

  Comando de instalação do plugin-babel.

```sh

$ npm i -D @babel/core babel-loader @babel/preset-env

```
Código de configuração do plugin-babel.

```js

module: {
  rules: [
    {
      test:/.\.js$/,
      exclude:/node_modules/,
      use: {
          loader: 'babel-loader',
          options: {
            presets:['@babel/preset-env']
          }
      }
    }
},

```

### Plugin-Files

  Comando de instalação do plugin-files.

```sh

$ npm i -D file-loader

```
  Código de configuração do plugin-files.

```js

module: {
  rules: [
    {
      test:/\.(jpe?g|png|gif|svg)$/i,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]'
      }
    }
},

```

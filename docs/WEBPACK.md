# WEBPACK

  Novo arquivo: `webpack.config.js`

```sh

# diretorio principal
$ mkdir ./src

# arquivo de teste
$ echo console.log('WEBPACK, OK!') > ./src/index.js

# criação do arquivo
$ touch webpack.config.js

# editar arquivo
$ nano webpack.config.js

```
  - Copie e cole o código no arquivo `webpack.config.js`

```js

const path = require('path');

module.exports = {
  // mode: 'development',
  entry: './src/index.js',
  plugins: [],
  output: {
    filename:'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: []
  }
};

```

- Execute o `webpack `

```sh

# build webpack, modo de desenvolvimento
$ npx webpack -d

# build webpack, modo de produção
$ npx webpack -p

# execute o arquivo destinado
$ node ./dist

```

## Instalação

  *Dependencias de desenvolvimento*

```sh

# dependencias do WEBPACK.
$ npm i -D webpack webpack-cli webpack-dev-server

# trabalhar com webapck e express, dependencias principais.
$ npm i -D webpack-dev-middlewar webpack-hot-middleware

# utilizando babel.
$ npm i -D @babel/cli @babel/core @babel/node @babel/preset-env babel-loade

# utilizando css.
$ npm i -D css-loade node-sass sass-loade style-loade mini-css-extract-plugin

# utilizando HTML no webapck.
$ npm i -D html-webpack-plugi

# utilizando arquivos de imagens e outros no webpack.
$ npm i -D file-loader

# servidor live
$ npm -D live-server

```
---

## PLUGINS

<br>

#### Plugin-HTML

 - Comando de instalação do `html-webpack-plugin`.

```sh

# instala a dependencia de desenvolvimento.
$ npm i -D html-webpack-plugin

```

  - Código de configuração do `html-webpack-plugin`.

```js

const HtmlWebpackPlugin = require('html-webpack-plugin');

plugins: [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: './src/index.html'
  }),
],

```

<br>

#### Plugin-CSS

  - Comando de instalação do `mini-css-extract-plugin`.

```sh

$ npm i -D node-sass sass-loader style-loader css-loader mini-css-extract-plugin

```

  - Código de configuração do `mini-css-extract-plugin`.

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
  }),
],

```

<br>

### Plugin-Babel

  - Comando de instalação do plugin-babel.

```sh

$ npm i -D @babel/core babel-loader @babel/preset-env

```
  - Código de configuração do plugin-babel.

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

<br>

#### Plugin-Files

  - Comando de instalação do plugin-files.

```sh

$ npm i -D file-loader

```
  - Código de configuração do plugin-files.

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
  ]
},

```

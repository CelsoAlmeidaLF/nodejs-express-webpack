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
  entry: './src/index.js',
  output: {
    filename:'index.js',
    path: path.resolve(__dirname, 'dist'),
  }
};

```

- Execute o `webpack `

```sh

# comando webpack
$ npx webpack

# execute o arquivo destinado
$ node ./dist

```

## Instalação

*Dependencias de desenvolvimento*

```sh

# dependencias do WEBPACK.
npm i -D webpack webpack-cli webpack-dev-server

# trabalhar com webapck e express, dependencias principais.
npm i -D webpack-dev-middlewar webpack-hot-middleware

# utilizando babel.
$ npm i -D @babel/cli @babel/core @babel/node @babel/preset-env babel-loader

# utilizando css.
$ npm i -D css-loader node-sass sass-loader style-loader mini-css-extract-plugin

# utilizando HTML no webapck.
$ npm i -D html-webpack-plugin

# utilizando arquivos de imagens e outros no webpack.
$ npm i -D file-loader
```

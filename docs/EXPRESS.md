# EXPRESS NODEJS

  - Instale os plugins `webpack-dev-middleware` e
  `webpack-hot-middleware`.

  - crie um arquivo `.bin/index.js` para configuração do servidor express.

```sh

# instala as dependencias middleware
$ npm i -D webpack-dev-middleware webpack-hot-middleware

# arquivo ./bin/index.js
$ mkdir bin; touch ./bin/index.js

```

  - Código do `express` em `./bin/index.js`.

```js
// require express
const express = require('express');
const app = express();

// require webpack
const webpack = require('webpack');
const webpackDevMiddleware = require(
  'webpack-dev-middleware');
const copiler = require('./webpack.config');

// middleware
app.use(webpackDevMiddleware(webpack(copiler)));
// app.use(require("webpack-dev-middleware")(compiler));

// static public
app.use(express.static(__dirname + '/public'));

// port server
app.listen(3000, () => {
  console.log('server on port 3000') });


```

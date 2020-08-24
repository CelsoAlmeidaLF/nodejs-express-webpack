# EXPRESS NODEJS

  - Instale os plugins `webpack-dev-middleware` e
  `webpack-hot-middleware`.

  - crie um arquivo `.bin/index.js` para configuração do servidor express.

```sh
# instalar as dependencias middleware
$ npm i -D webpack-dev-middleware

# criar diretórios principais
$ mkdir bin src src/{scss,js} views

# cria arquivos principais
$ touch ./bin/index.js ./src/scss/style.scss ./src/js/index.js ./views/index.html webpack.config.js

# editar código express em ./bin/index.js
$ nano ./bin/index.js
```
  - Código do `express` em `./bin/index.js`.

```js
const express = require('express');
const app = express();
const path = require('path');
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const copiler = require('../webpack.config');
const port = 3000;

//middleware
app.use(middleware(webpack(copiler)));

// folder public
app.use(express.static(__dirname + '/public'));

// rotas
app.get('/',(red, res) => { res.sendFile(
    path.join(__dirname,'../views/index.html'))
});

//config server port
app.listen(port, () => {
  console.log(
    `server runnin is http://localhost:${port}`)
});

```
  - Edite o código-fonte em: `./views/index.html`

```sh
# editar arquivo
$ nano views/index.html
```
  - Código fonte: `html`

```html

<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8">
    <title>webpack-express</title>
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    <h3>Index</h3>
    <script src="js/index.js" charset="utf-8"></script>
  </body>
</html>

```

- Codigo-fonte: [webpack](./docs/WEBPACK.md)

```js
const path = require('path');

module.exports = {
  // mode: 'development',
  entry: './src/index.js',
  plugins: [],
  output: {
    filename:'js/index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: []
  }
};

```

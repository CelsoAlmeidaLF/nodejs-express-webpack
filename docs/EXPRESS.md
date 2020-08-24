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
  - Agora, crie um arvivo `./views/index.html` para testar o projeto.

```sh

# cria diretorio e arquivo
$ mkdir ./views; touch views/index.html

# editar arquivo
$ nano views/index.html

```
  - Copie e cole o Código fonte: `html`

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

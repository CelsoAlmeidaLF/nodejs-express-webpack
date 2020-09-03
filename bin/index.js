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

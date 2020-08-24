const express = require('express');
const app = express();
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const copiler = require('../webpack.config');

//middleware
app.use(webpackDevMiddleware(webpack(copiler)));

// folder public
app.use(express.static(__dirname + '/public'));

app.get('/',(red, res) => {
  res.sendFile(
    path.join(__dirname,'../views/index.html'))
})

//config server port
app.listen(3000, () => { console.log('server on port 3000') });

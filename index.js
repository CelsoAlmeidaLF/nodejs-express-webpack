const express = require('express');
const app = express();

// webpack
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config');

// middleware
app.use(webpackDevMiddleware(webpack(webpackConfig)));

app.use(express.static(__dirname + '/public'));

app.listen(3000, () => {
  console.log('server on port 3000')
});

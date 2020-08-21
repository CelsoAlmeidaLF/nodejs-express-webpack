const express = require('express');

// webpack
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config');

// express
const app = express();
const path = require('path');

// Middleware
app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}));
// app.use(webpackDevMiddleware(webpack(webpackConfig)));

app.use(require("webpack-hot-middleware")(compiler));

// Folder public
app.use(express.static(path.join(__dirname,'./public')));

// Rotas
app.get('/sobre',(red, res) => { res.send('sobre') });

// Outros
app.listen(3000, () => { console.log('server on port 3000') });

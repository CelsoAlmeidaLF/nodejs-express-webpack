const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// app.use(require('morgan')('short'));

// webpack
const webpack = require('webpack');
const webpackConfig = require(process.env.WEBPACK_CONFIG ? process.env.WEBPACK_CONFIG : '../webpack.config');
const compiler = webpack(webpackConfig);

// config webpack
app.use(require("webpack-dev-middleware")(compiler));
app.use(require("webpack-hot-middleware")(compiler));

// rotas
app.get("/", function(req, res) { res.sendFile(path.join(__dirname,'../views/index.html')) });
app.get("/sobre", function(req, res) { res.sendFile(path.join(__dirname,'../views/sobre.html')) });

// porta
if (require.main === module) {
  var server = http.createServer(app);
  server.listen(process.env.PORT || port, function() {
    console.log("Listening on %j", server.address());
  });
}

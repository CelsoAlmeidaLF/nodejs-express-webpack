import $ from 'jquery';

$(function () {
  $('body').append('<h1> Hello </h1>');
});

// import express from 'express';
// import handlebars from 'express-handlebars';
// import path  from 'path';
// import routes from './routes';

// const app = express();
// const port = 3000;

// config
// app.engine('handlebars',handlebars({defaultLayout:'main'}));
// app.set('view engine','handlebars');

// public folder
// app.use(express.static(path.join(__dirname,'../public')));
// app.use(express.static(path.join(__dirname,'../dist')));

// rotas
// app.use('/', routes);

// outros
// app.listen(port,() => { console.log("running server: http://localhost:" + port) });

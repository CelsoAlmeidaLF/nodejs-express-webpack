# WEBPACK
  *Meu material de estudo com webpack.*

  Criação de novo arquivo: `webpack.config.js`

  ```sh



  $ touch webpack.config.js

  ```
  Código básico do arquivo `webpack.config.js`

  ```js

  const path = require('path');

  module.exports = {
    entry: './src/index.js',
    output: {
      filename:'main.js',
      path: path.resolve(__dirname, 'dist'),
    }
  };

  ```

[Códigos de plugins utilizados](https://github.com/CelsoAlmeidaLF/mat-est-express-webpack/blob/master/docs/WEBPACK.md)

  -  `html-webpack-plugin` - plugin-html

  -  `mini-css-extract-plugin` - plugin-css

  -  config-babel com `webpack`

[Código para do arquivo `express`](https://github.com/CelsoAlmeidaLF/mat-est-express-webpack/blob/master/docs/EXPRESS.md)

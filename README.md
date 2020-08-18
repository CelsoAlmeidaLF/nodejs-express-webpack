# WEBPACK
  **Material de estudo webpack.**

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

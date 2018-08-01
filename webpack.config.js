const path = require('path');

const config = {
  devServer: {
    contentBase: 'test/',
    port: '8080',
    open: true
  },

  resolve: {
    symlinks: false,
  },
  entry: {
    app: [__dirname + "/test/test.js"]
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: [
            ['es2015', { 'modules' : false}]
          ],
        }
      }
    ]
  },

  output: {
    path: path.resolve(__dirname, 'test'),
    publicPath: "/assets/",
    filename: "bundle.js"
  }
};

module.exports = config;

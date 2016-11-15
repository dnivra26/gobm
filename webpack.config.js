var webpack = require('webpack');

var path = require('path');
var srcPath = __dirname + '/app';
var port = 2016;
var publicPath = '/dist/';

module.exports = {
  entry: [
    './app/index.js'
  ],
  debug: true,
  devtool: "#inline-source-map",
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  output: {
    filename: 'index_bundle.js',
    path: path.join(__dirname, '/dist'),
    publicPath: publicPath
  },
  devServer: {
    contentBase: './app',
    historyApiFallback: true,
    hot: true,
    port: port,
    publicPath: publicPath,
    proxy: {
      "*": "http://localhost:3016"
    },
    noInfo: false
  },
  plugins: [
    new webpack.ProvidePlugin({
      'Promise': 'es6-promises',
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ],
  resolve: {
    alias: {
      components: srcPath + '/components/',
      containers: srcPath + '/containers/',
      parsers: srcPath + '/parsers/',
      styles: srcPath + '/styles/'
    }
  }
};

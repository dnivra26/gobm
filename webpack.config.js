var webpack = require('webpack');

var path = require('path');
var srcPath = __dirname + '/app';
var port = 2016;
var publicPath = '/dist/';
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './app/index.js'
  ],
  module: {
loaders: [

	{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
	{
		test: /\.css$/,
       		loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
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
    }),
    new ExtractTextPlugin('style.css', { allChunks: true })
  ],
  resolve: {
    alias: {
      components: srcPath + '/components/',
      containers: srcPath + '/containers/',
      styles: srcPath + '/styles/',
      parsers: srcPath + '/parsers/'
    }
  }
};

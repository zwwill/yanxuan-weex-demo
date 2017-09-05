// only build plugin module
require('webpack')
require('weex-loader')

var path = require('path');
var fs=require('fs');

let root = process.cwd();

module.exports = {
  entry: {
    plugins: [path.join(root,'plugins/plugin_bundle.js')],
  },
  output: {
    path: path.join(root,'web'),
    filename: 'plugin.js'
  },
  devtool:'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.js(\?[^?]+)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015',
      },
      {
        test: /\.we(\?[^?]+)?$/,
        loader: 'weex-loader',
      },
      {
        test: /\.vue(\?[^?]+)?$/,
        loader: 'vue',
      }
    ]
  },
  
  /*plugins: [
    new webpack.optimize.UglifyJsPlugin( {
      minimize : true,
      sourceMap : true,
      mangle: true,
      compress: {
        warnings: false
      }
    } )
  ]*/
  
}
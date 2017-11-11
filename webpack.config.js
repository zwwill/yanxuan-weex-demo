const pathTo = require('path');
const fs = require('fs-extra');
const webpack = require('webpack');
const entry = {index: pathTo.resolve('src', 'entry.js')};
const weexEntry = {index: pathTo.resolve('src', 'entry.js')};

const plugins = [
  new webpack.optimize.UglifyJsPlugin({minimize: true}),
  new webpack.BannerPlugin({
    banner: '// { "framework": Vue} \n',
    raw: true,
    exclude: 'Vue'
  })
];

const webConfig = {
  context: pathTo.join(__dirname, ''),
  entry: entry,
  output: {
    path: pathTo.join(__dirname, 'dist'),
    filename: '[name].web.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader'
        }],
        exclude: /node_modules/
      },
      {    
        test: /\.css$/,
        use: [{
            loader: 'css-loader'
        }]
    },
    {        
      test: /\.vue(\?[^?]+)?$/,
      use: [{
          loader: 'vue-loader'
        }]
      }
    ]
  },
  plugins: plugins
};

const weexConfig = {
  entry: weexEntry,
  output: {
    path: pathTo.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
        }],
        exclude: /node_modules/
      },
      {
        test: /\.vue(\?[^?]+)?$/,
        use: [{
          loader: 'weex-loader'
        }]
      },
      {
        test: /\.css$/,
        use: [{
          loader: 'css-loader'
        }]
      },
      {
        test: /\.we(\?[^?]+)?$/,
        use: [{
          loader: 'weex-loader'
        }]
      }
    ]
  },
  plugins: plugins,
};

var exports = [webConfig, weexConfig];

module.exports = exports;

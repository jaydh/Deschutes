"use strict";

const debug = process.env.NODE_ENV !== "production";

const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    'app': [
      'react-hot-loader/patch',
    path.join(__dirname, 'src', 'app-client.js')]
  },

  output: {
    path: path.join(__dirname, 'src', 'static', 'js'),
    publicPath: "/js/",
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/, 
      exclude: /node_modules/,
      loader: "babel-loader",
      query:
      {
        presets: ['react','es2015']
      }
    }]    
  },
  plugins: debug ? [] : [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};

//webpack.config.js

var webpack = require('webpack');
var path = require('path');
const nodeExternals = require('webpack-node-externals');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src/');

module.exports= [
  {
    name: "Client-Side",
    entry: APP_DIR + '/client/client.jsx',
    output: {
      path: BUILD_DIR,
      filename: 'client.js'
    },
    module : {
      loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        exclude: [/node_modules/],
        loader : 'babel-loader',
        query: {
          presets: ['es2015','react','stage-3']
        }
      }
      ]
    }
  },
  {
    name: "Server-Side",
    entry: APP_DIR + '/server/server.jsx',
    target:"node",
    node: {
      __dirname: false
    },
    externals: [nodeExternals()],
    output: {
      path: BUILD_DIR,
      filename: 'server.js'
    },
    module : {
      loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        exclude: [/node_modules/],
        loader : 'babel-loader',
        query: {
          presets: ['es2015','react','stage-3']
        }
      }
      ]
    }
  }
];
const path = require('path')
const merge = require('webpack-merge')
const webpackNodeExternals = require('webpack-node-externals')

const baseConfig = require('./webpack.base')

const config = {
  //   inform webpack that we are building a bundle for node js
  //   rather than for the browser
  target: 'node',

  //  tell webpack root file of application
  entry: './src/index.js',

  //  tell webpack where to put output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  externals: [webpackNodeExternals()]
}

module.exports = merge(baseConfig, config)

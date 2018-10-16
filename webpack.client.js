const path = require('path')
const merge = require('webpack-merge')

const baseConfig = require('./webpack.base')

const config = {
  //  tell webpack root file of application for client side
  entry: './src/client/index.js',

  //  tell webpack where to put output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  }
}

module.exports = merge(baseConfig, config)
 
const path = require('path')

module.exports = {
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

  //   tell webpack to run babel to transform jsx to js
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/react',
            [
              '@babel/env',
              {
                targets: {
                  browsers: ['last 2 versions']
                }
              }
            ]
          ],
          plugins: [
            // Stage 0 preset upgrade for babel-7
            '@babel/plugin-proposal-function-bind'
          ]
        }
      }
    ]
  }
}

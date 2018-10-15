module.exports = {
  module: {
    rules: [
      // babel loader setup
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          // babel presets
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

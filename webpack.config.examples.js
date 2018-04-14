const path = require('path')
const config = require('./webpack.config')

module.exports = {
  entry: './examples/index.ts',
  output: {
    libraryTarget: 'umd',
    filename: 'examples.js',
    path: path.join(__dirname, '/examples_dist')
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader?config=tsconfig.examples.json'
      },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },

  resolve: config.resolve,
  externals: config.externals
}

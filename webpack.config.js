'use strict'
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const createStyledComponentsTransformer = require('typescript-plugin-styled-components')
  .default
const styledComponentsTransformer = createStyledComponentsTransformer()
module.exports = {
  entry: './index',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
        options: {
          getCustomTransformers: () => ({
            before: [styledComponentsTransformer]
          })
        }
      },
      {
        test: /\.css$/,
        loader:
          'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}

const RelayCompilerWebpackPlugin = require('relay-compiler-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const sourceFiles = path.resolve(__dirname, 'src');
module.exports = {
  context: sourceFiles,
  entry: './index.tsx',
  devtool: 'source-map',
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: { /* Loader options go here */ }
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: { babelrc: true }
          },
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'assets', 'index.template.html'),
    }),
    new RelayCompilerWebpackPlugin({
      schema: path.resolve(__dirname, 'data', 'schema.graphql'), // or schema.json or a GraphQLSchema instance
      src: sourceFiles,
    })
  ]

};
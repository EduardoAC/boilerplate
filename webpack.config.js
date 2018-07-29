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
        test: /\.(tsx|ts)$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: { /* Loader options go here */ }
      },
      {
        test: /\.(tsx|ts)?$/,
        use: 'ts-loader',
        exclude: /node_modules/
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
      schema: path.resolve(__dirname, 'schema.graphql'), // or schema.json or a GraphQLSchema instance
      src: sourceFiles,
    })
  ]

};
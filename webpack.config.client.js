const path = require('path')
const webpack = require('webpack')
const CURRENT_WORKING_DIR = process.cwd()

const config = {
  name: "browser",
  mode: "development",
  devtool: 'eval-source-map',
  // entry specifies the entry file where Webpack starts bundling, in this case with the main.js file in the client folder. 
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?reload=true',
    path.join(CURRENT_WORKING_DIR, 'client/main.js')
  ],
  //output specifies the output path for the bundled code
  output: {
    path: path.join(CURRENT_WORKING_DIR, '/dist'),
    filename: 'bundle.js',
    publicPath: '/dist/' //allows specifying the base path for all assets in the application.
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: [
        'babel-loader'
      ]
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // enables hot module replacement for react-hot-loader.
    new webpack.NoEmitOnErrorsPlugin() // allows skipping emitting when there are compile errors.
  ]
}

module.exports = config

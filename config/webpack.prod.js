const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: path.join(__dirname, '..', 'src/library/index.js'),
  output: {
    path: path.join(__dirname, '..',  'dist'),
    filename: 'index.js',
    library: 'formGenerator',
    libraryTarget: 'umd',
    libraryExport: 'default',
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
};

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    liveReload: true,
    compress: true,
    port: 9000,
    open: true,
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.join(__dirname, '..', 'src/dev/index.html'),
  })],
  entry: path.join(__dirname, '..', 'src', 'dev'),
};

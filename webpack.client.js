const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const devServer = require('./webpack.devServer.js');

module.exports = merge(common, devServer, {
  mode: 'development',
  entry: './server/client.tsx',
  output: {
    filename: 'client.js',
    publicPath: '/',
  },
});

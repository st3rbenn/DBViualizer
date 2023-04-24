const { merge } = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  entry: './server/server.tsx',
  output: {
    filename: 'server.js',
  },
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['ignore-loader'],
      },
    ],
  },
});

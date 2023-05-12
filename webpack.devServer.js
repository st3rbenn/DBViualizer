const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
  devServer: {
    hot: true,
    open: false,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000',
        secure: false,
      },
    },
    historyApiFallback: true,
    compress: true,
  },
};

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
  devServer: {
    hot: true,
    open: false,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
};

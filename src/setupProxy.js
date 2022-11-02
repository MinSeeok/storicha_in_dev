const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        proxy({
            target: 'https://dev-nft.storicha.in/',
            changeOrigin: true
        })
    )
}
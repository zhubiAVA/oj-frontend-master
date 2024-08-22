const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (req, res) => {
  let target = 'http://47.113.179.43:8101'


  // 创建代理对象并转发请求
  createProxyMiddleware({
    target,
    changeOrigin: true
  })(req, res)
}

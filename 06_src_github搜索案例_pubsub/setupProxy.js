/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-04-22 23:49:13
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-23 00:03:46
 */
const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    proxy('/api1', { // 遇见api1前缀的请求，就会触发该代理配置 
      target: 'http://localhost:5000', // 请求转发给谁
      changeOrigin: true, // 控制服务器收到的响应头中Host字段的值
      pathRewrite: {'^/api1': ''} // 重写请求路径
    })
  )
}
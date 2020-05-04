const { createProxyMiddleware } = require("http-proxy-middleware")
module.exports = function (app) {
  app.use(
    "/orange",
    createProxyMiddleware({
      target: "https://api.juooo.com",
      changeOrigin: true,
      pathRewrite: {
        "^/orange": "",
      },
    })
  )
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://127.0.0.1:8081",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  )
}

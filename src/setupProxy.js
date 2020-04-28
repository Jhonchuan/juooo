const {createProxyMiddleware} = require('http-proxy-middleware')
module.exports = function(app){
    app.use('/orange',createProxyMiddleware({
        target:"https://api.juooo.com",
        changeOrigin:true,
        pathRewrite:{
            "^/orange":""
        }
    }))
}
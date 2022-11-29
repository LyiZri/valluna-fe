import next from 'next'
// const next =require('next')
const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')

const devProxy = {
    '/api': {
        target: 'http://18.138.236.244:8000', // 端口自己配置合适的
        pathRewrite: {
            '^/api': '/api/'
        },
        changeOrigin: true
    }
}

const port = parseInt(process.env.PORT, 10) || 3001
// const dev = process.env.NODE_ENV !== 'production'
const app = next({
    dev: true
})
const handle = app.getRequestHandler()


app.prepare()
    .then(() => {
        const server = express()
        if (devProxy) {
            Object.keys(devProxy).forEach(function (context) {
                server.use(createProxyMiddleware(context, devProxy[context]))
            })
        }

        server.all('*', (req, res) => {
            handle(req, res)
        })

        server.listen(port, err => {
            if (err) {
                throw err
            }
        })
    })
    .catch(err => {
        console.log('An error occurred, unable to start the server')
        console.log('发生错误，无法启动服务器')
        console.log(err)
    })
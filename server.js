const express = require('express')
const { join } = require('path')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config')

const server = express()
const port = 9000

const compiler = webpack(webpackConfig)

server.use(webpackDevMiddleware(compiler, {
	publicPath: webpackConfig.output.publicPath
}))

server.use(express.static(join(__dirname, 'dist')))

server.get('/*', (req, res) => {
	res.sendFile(join(__dirname, 'dist', 'index.html'))
})

server.listen(port, () => console.log(`listening on port ${port}`));

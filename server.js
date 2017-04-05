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

server.get('/api/topics', (req, res) => {
	const topics = [ "stateless", "stateful", "container" ]
	res.json(topics);
})

server.get('/api/topics/:topicId', (req, res) => {
	const topicDetail = [
		{
			title: "Stateless Functional Components",
			description: "Only receive data via props"
		},
		{
			title: "Stateful Components",
			description: "Maintain local state, and pass that state down to their children"
		},
		{
			title: "Container Components",
			description: "Communicate with remote endpoints to provide data to child components"
		}
	]
	res.json(topicDetail[req.params.topicId])
})

server.get('/*', (req, res) => {
	res.sendFile(join(__dirname, 'dist', 'index.html'))
})

server.listen(port, () => console.log(`listening on port ${port}`));

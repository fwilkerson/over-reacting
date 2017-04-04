const { resolve } = require('path');

module.exports = {
	entry: resolve(__dirname, 'src', 'index.js'),
	output: {
		filename: 'bundle.js',
		path: resolve(__dirname, 'dist', 'js'),
		publicPath: '/js/'
	},
	devtool: 'cheap-eval-source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				use: ['babel-loader'],
				exclude: /node_modules/
			}
		]
	}
}
/* global module, require */
var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: './src/app.js',
	output: {
		filename: './dist/bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel'
			},
			{
				test: /\.html$/,
				loader: 'raw'
			}
		]
	},
	// This is to load polyfills (http://mts.io/2015/04/08/webpack-shims-polyfills/)
	plugins: [
		new webpack.ProvidePlugin({
			fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch',
			'es6-promise': 'es6-promise'
		})
	],
};

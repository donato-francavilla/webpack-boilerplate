const webpack_config = require('./webpack.config.js');
const pkg = require('./package.json');
const path = require('path');
console.log(path.join(__dirname, 'app'));
module.exports = function(config) {
	config.set({
		files : [
			'app/test.js'
		],

		preprocessors : {
			'app/test.js' : ['webpack', 'sourcemap']
		},

		frameworks : ['jasmine'],

		browsers: ['Chrome'],

		webpack : {
			devtool: 'inline-source-map',
			module: {
		      loaders: [
		        {
		          test: /\.js?$/,
		          loaders: ['babel-loader?presets[]=es2015']
		        },
		        {
		          test: /\.html?$/,
		          loaders: ['html']
		        }
		      ]
		    }
		},

		webpackMiddleware : {
			stats: 'errors-only'
		}

	});
}
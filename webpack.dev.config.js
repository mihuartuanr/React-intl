var webpack=require('webpack');
var path =require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackNotifierPlugin = require('webpack-notifier');

var SRC_PATH = path.resolve(__dirname,'./src');
var DIST_PATH = path.resolve(__dirname,'./dist');
var TEM_PATH = path.resolve(SRC_PATH,'./templates');

module.exports = {
	entry:{
		bundle:SRC_PATH
	},
	output:{
		path:DIST_PATH,
		filename:'[name].js'
	},
    devtool:'eval-source-map',
    stats: {
        errorDetails: true,
        colors: false,
        modules: true,
        reasons: true
    },
	module:{
		loaders:[
			{
				test:/\.js$/,
				loader:'babel-loader',
				include:SRC_PATH
			}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			title:'i18n',
			filename:'index.html',
			template:path.resolve(TEM_PATH,'./index.html'),
			chunks:['bundle'],
			inject:'body'
		}),
        new WebpackNotifierPlugin({excludeWarnings: true}),
		 new webpack.HotModuleReplacementPlugin()
	],
	devServer:{
        histroyApiFallback : true,
        hot : true,
        inline : true,
        progress : true,
        colors:true
	}
}
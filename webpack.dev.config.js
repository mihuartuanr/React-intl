var webpack=require('webpack');
var path =require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var WebpackDelPlugin = require('webpack-del-plugin');

var ROOT_PATH = path.resolve(__dirname,'./app');
var SRC_PATH = path.resolve(ROOT_PATH,'./src');
var DIST_PATH = path.resolve(__dirname,'./dist');
var TEM_PATH = path.resolve(ROOT_PATH,'./templates');

module.exports = {
	devtool:'eval-source-map', 
	stats: {
        errorDetails: true, 
        colors: false,
        modules: true,
        reasons: true
    },
	entry:{
		bundle:SRC_PATH
	},
	output:{
		path:DIST_PATH,
		filename:'[name].js'
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
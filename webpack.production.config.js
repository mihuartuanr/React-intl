var webpack=require('webpack');
var path =require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var WebpackDelPlugin = require('webpack-del-plugin');

var ROOT_PATH = path.resolve(__dirname,'./app');
var SRC_PATH = path.resolve(ROOT_PATH,'./src');
var DIST_PATH = path.resolve(ROOT_PATH,'./dist');
var TEM_PATH = path.resolve(ROOT_PATH,'./templates');

module.exports = {
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
		new CopyWebpackPlugin([
			{from:path.resolve(SRC_PATH,'./images'),
				to:path.resolve(DIST_PATH,'./images')},
			{from:path.resolve(SRC_PATH,'./webFonts'),
				to:path.resolve(DIST_PATH,'./webFonts')},
			{from:path.resolve(SRC_PATH,'./locale'),
				to:path.resolve(DIST_PATH,'./locale')}
		]),
        new WebpackDelPlugin({match: DIST_PATH}),
	]
}
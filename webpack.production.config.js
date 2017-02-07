var webpack=require('webpack');
var path =require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var WebpackDelPlugin = require('webpack-del-plugin');


var SRC_PATH = path.resolve(__dirname,'./src');
var DIST_PATH = path.resolve(__dirname,'./dist');
var TEM_PATH = path.resolve(SRC_PATH,'./templates');

module.exports = {
	entry:{
		app:path.resolve(SRC_PATH,'index'),
		vendors:['react','react-dom','react-intl']
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
			chunks:['app','vendors'],
			inject:'body'
		}),
		new CopyWebpackPlugin([
			{from:path.resolve(SRC_PATH,'./images'),
				to:path.resolve(DIST_PATH,'./images')},
			{from:path.resolve(SRC_PATH,'./webFonts'),
				to:path.resolve(DIST_PATH,'./webFonts')},
            {from:path.resolve(SRC_PATH,'./scripts'),
                to:path.resolve(DIST_PATH,'./scripts')},
            {from:path.resolve(SRC_PATH,'./locale'),
                to:path.resolve(DIST_PATH,'./locale')}
		]),
        new WebpackDelPlugin({match: DIST_PATH}),
	    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    	new webpack.optimize.CommonsChunkPlugin({
    		name : 'vendors',
			filename: 'vendors.js'
        })
	]
}
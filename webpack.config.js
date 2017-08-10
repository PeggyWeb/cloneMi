const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry:'./src/cart.vue',
	output:{
		path:__dirname+'/dist',
		filename:'js/[name].bundle.js'
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				loader:'babel-loader',
				exclude:__dirname+'./node_modules',
				include:__dirname+"./src/"
				//options:{'presets':['env']}
			}
			,{
				test:/\.html$/,
				loader:'html-loader'
			}
			,{
				test:/\.(jpg|png|gif|svg)$/i,
				loader:'file-loader'
			}
			,{
				test:/\.css$/,
				use:[
					"style-loader",
					"css-loader",				
					{
						loader:"postcss-loader",
						options:{
							plugins:[
								require('autoprefixer')({broswers:['last 5 version']}),
							]
						}
					},
				]
			}
		]
	},
	plugins:[
	new htmlWebpackPlugin({
		filename:'index.html',
		template:'index.html',
		// 把js放在头部还是body里inject:'head'
		title:'this is a test',
		date:new Date(),
		inject:'body',
		chunks:['main',"a"]//当前html需要的chunks，对应entry里定义的
	})	
	]
}







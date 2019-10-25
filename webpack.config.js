const path = require("path");
const webpack = require("webpack");
const HTMLPlugin = require("html-webpack-plugin");
module.exports = {
    mode:"development",
    entry:{
        main:["./src/index.tsx"],
        vendor: ["react-dom", "react", "react-router", "babel-polyfill"],
    },
    output:{
        filename:"[name].js",
        path:path.resolve(__dirname,"dist/"),
    },
    // watch:true,这里是监听全部
    devtool:"source-map",//可能会减慢速度
    resolve:{
        extensions:[".ts",".tsx",".js","json"],
        // alias:{'styles':resolve('src/assets/styles')}
    },
    module:{
        rules:[
            {
                test:/\.ts(x)$/,
                use:{
                    loader:"awesome-typescript-loader",
                    loader:"babel-loader"
                },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: 'url-loader?limit=10000',
            },
            {
                test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                use: 'file-loader',
            }  ,
            {enforce:"pre",test:/\.js$/,loader:"source-map-loader"}
        ]
    },
    devServer:{
        contentBase:path.join(__dirname,"dist/"),
        // publicPath:"/dist",
        port:3000,
        hot:true,
        open:true,
        
    },   
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HTMLPlugin ({
            filename:'index.html',
            template:'template.html'
        })
    ]
}
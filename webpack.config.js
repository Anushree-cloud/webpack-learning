const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode : 'development', // or, 'production' 

    entry : {
        main : path.resolve(__dirname, 'src/app.js'),
    },

    output : {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,
    },
    devtool: "inline-source-map",

    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 5000, // default port number is 8080
        open: true,
        hot: true,
        watchContentBase: true
    },

    module : {
        rules : [
            {
                test : /\.css$/, use : ['style-loader', 'css-loader'],
            },

            {
                test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/, type: 'asset/resource',
            },

            {
                test : /\.js$/,
                exclude : /node_modules/,
                use : {
                    loader : 'babel-loader',
                    options : {
                        presets : ['@babel/preset-env']
                    },
                },
            },

        ],
    },

    plugins : [new htmlWebpackPlugin({
            title : "Webpack-Git Demo",
            filename : "index.html",
            template : path.resolve(__dirname, 'src/index.html')
        }),
    ],

}
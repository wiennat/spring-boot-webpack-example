const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const DEBUG = process.env.NODE_ENV !== 'production';
const assetOutputDir = path.resolve(__dirname,'../../../build/resources/main/static/');
module.exports = {
    entry: [
        "./src/app.js"],
    output: {
        path: assetOutputDir,
        filename: "app.js"
    },
    devServer: {
        hot: true,
        contentBase: assetOutputDir,
        publicPath: '/',
        port: 9000,
        proxy: {
            "!/**/*.{css,js,hot-update.json}": {
                target: "http://localhost:8080",
                changeOrigin: true
            }
        }
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                include: [
                    path.resolve(__dirname, "./src")
                ],
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                loader: (DEBUG) ? 'style-loader!css-loader':ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("style.css"),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ]
};

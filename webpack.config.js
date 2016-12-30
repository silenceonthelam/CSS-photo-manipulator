var webpack = require("webpack"),
    path = require("path");

module.exports = {
    devtool: "cheap-module-eval-source-map",
    entry: [
        "webpack-hot-middleware/client",
        "./scripts/index"
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loader: "babel",
            exclude: /node_modules/,
            include: __dirname
        }, { 
            test: /\.scss$/,
            include: path.join(__dirname, "styles"),
            loader: "style!css!sass"
        }, {
            test: /\.(jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            include: path.join(__dirname, "img"),
            loader: "file-loader"
        }]
    },  
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/static/"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ["",".js",".scss"]
    }
};
"use strict";

var path    = require("path"),
    webpack = require("webpack");

// var autoprefixer = require("autoprefixer-core"),
    var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./entry.js",
    keepalive: true,
    module: {
        loaders: [{        
            test: /\.jpe?g$|\.png$$/,
            loader: 'file-loader?name=[path][name].[ext]'
        // }, {
            // test: /.*\.(gif|png|jpe?g|svg)$/i,
            // loaders: [
            //   'file?hash=sha512&digest=hex&name=[hash].[ext]',
            //   '../index.js?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
            // ]
        }, {
            test: /\.(js|jsx)$/,
            loader: "babel-loader",
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract(
                "style",
                "css"
            )
        }]
    },
    output: {
        path: path.join(__dirname, "build"),
        filename: "build.js"
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new ExtractTextPlugin("styles.css")
    ],
    resolve: {
        extensions: ["", ".js", ".jsx", ".css"],
        modulesDirectories: ["node_modules"],
    },
    stats: {
        colors: true,
        reasons: true
    },
    target: "web",
    watch: true
};
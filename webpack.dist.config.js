var autoprefixer      = require("autoprefixer-core"),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    webpack           = require("webpack");

module.exports = {
    entry: [
        "./scripts/index"
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ["babel-loader"],
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract(
                "style",
                "css!autoprefixer?safe=true"
            )
        }]
    },
    output: {
        path: __dirname + "/build/",
        filename: "bundle.js",
        publicPath: "/build/"
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new ExtractTextPlugin("styles.css"),
        new webpack.optimize.UglifyJsPlugin({
          compressor: {
            warnings: false
          }
        })
    ],
    resolve: {
        extensions: ["", ".js", ".jsx"],
        modulesDirectories: ["node_modules"]
    }
};
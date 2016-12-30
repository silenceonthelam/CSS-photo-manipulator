var webpack = require("webpack"),
    webpackDevMiddleware = require("webpack-dev-middleware"),
    webpackHotMiddleware = require("webpack-hot-middleware"),
    config = require("./webpack.config");

var app = new (require("express"))(),
    port = 2345;

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath, stats: {colors: true}, watch: true }));
app.use(webpackHotMiddleware(compiler));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index-dev.html");
})

app.listen(port, function(error) {
    if (error) {
        console.error(error);
    } else {
        console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
    }
});
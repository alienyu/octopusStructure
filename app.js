var express = require('express');
var webpack = require('webpack');
var WebpackDevMiddleware = require('webpack-dev-middleware');
var WebpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./build/webpack.config.js');
var compiler = webpack(config);
app = express();

app.set('views', __dirname);
app.set('view enigne', 'html');
app.use(express.static(__dirname + '/output'));//设置静态文件目录

app.use(WebpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: { colors: true }
}));

app.use(WebpackHotMiddleware(compiler));

var router = require("./server/router.js");
app.use(router);

//在这里修改端口号
app.listen(7777, function () {});

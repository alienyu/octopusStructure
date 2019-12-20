var express = require('express');
import React from 'react';
import { renderToString } from 'react-dom/server';
import proxy from 'http-proxy-middleware';
import App from '../biz/web/page/ssr/app';
var webpack = require('webpack');
var WebpackDevMiddleware = require('webpack-dev-middleware');
var WebpackHotMiddleware = require('webpack-hot-middleware');
var config = require('../build/webpack.config.js');
var compiler = webpack(config);
const app = new express();

// app.use(express.static(`${process.cwd()}`));

app.use(WebpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: { colors: true }
}));

app.use(WebpackHotMiddleware(compiler, {
  'log': false,
  'path': '/__webpack_hmr',
  'heartbeat': 10*1000
}));

//proxy
app.use('/web/bizA/*', proxy({ target: "http://localhost:10080/api", changeOrigin: true }));

var router = express.Router();

const html = renderToString(<App isMobile={true} />);

router.use(function(req, res) {
  console.log(123)
  res.sendfile(html);
})
app.listen(4000, function () {
  console.log('server is running at 4000');
});

export default app;

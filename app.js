var express = require('express');
const app = express();
app.set('views', __dirname);
app.set('view enigne', 'html');
app.use(express.static(__dirname + '/octopus-output'));//设置静态文件目录
// app.use("/vendors~web", express.static(__dirname + '/octopus-output/vendors~web'));//设置静态文件目录


//在这里修改端口号
app.listen(7788, () => console.log('Example app listening on port 3000!'));

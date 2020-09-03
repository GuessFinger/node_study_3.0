// 根据用户不同的请求 进行不同的响应
const http = require('http');

http.createServer(function (req, res) {

    // 获取用户请求的路径

    let url = req.url;
    let message = '404';

    if (url === '/') {
        message = '根路径';
    }
    if (url === '/index') {
        message = 'hello index';
    }
    if (url === '/login') {
        message = 'hello login';
    }
    if (url === '/list') {
        message = 'hello list';
    }
    res.setHeader("Content-Type", "text/plain;charset=utf-8");
    res.end(message);
}).listen(8080, function () {
    console.log('8080服务已经开启');
});

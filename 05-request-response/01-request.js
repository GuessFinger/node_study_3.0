const http = require('http');

http.createServer(function (req,res) {

    // request.headers 是请求报文的相关信息 是以对象的方式进行展示的
    console.log(req.headers);
    // request.headers 是请求报文的相关信息 是以数组的方式进行展示的
    console.log(req.rawHeaders);
    // 获取请求的客户端的使用的http版本
    console.log(req.httpVersion);
    // 请求的地址不包含主机名
    console.log(req.url);
    // 请求的方法
    console.log(req.method);
    res.end('ok');

}).listen(8880, function () {
    console.log('服务已经开启了');
});
// 我们的目的是 如果一个网页中请求了非常多的静态资源  我们不可能去一个一个的处理  我们的目的是处理一些公共的请求


// 加载http模块
const http = require('http');
const path = require('path');
const fs = require('fs');
const mime = require('mime');

// 创建服务
http.createServer(function (req, res) {

    // 我们先获取 放置静态资源的公共目录
    const publicPath = path.join(__dirname, 'public');

    // 根据用户的请求 计算出用户请求的资源的真实路径
    const reqPath = path.join(publicPath, req.url);


    fs.readFile(reqPath, function (error, data) {
        if (error) {
            res.end('文件不存在 404');
        } else {
            // 如果单单这样的返回 肯定是不行的  因为你静态资源的类型是多样的
            // 有一个第三方模块 mime 这个模块会帮你自动确定 Content-Type
            res.setHeader('Content-Type', mime.getType(reqPath));
            res.end(data);
        }
    });

}).listen(8080, function () {
    console.log('服务启动了');
});
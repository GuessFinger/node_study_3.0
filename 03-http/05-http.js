// 根据不同的请求 响应不同的页面 
const http = require('http');
const fs = require('fs');
const path = require('path');




http.createServer(function (req, res) {


    // 把其中的方法进行简单的抽取  通过查看结果
    // 1. 页面中的中文也没有乱码 因为在html中已经设置过编码格式了
    // 2. 我们读取  *.html的时候  没有把data转成字符串  直接用的是Buffer  res.end(可以用Buffer)
    function readHtml(params) {
        fs.readFile(path.join(__dirname, 'htmls', params), function (error,data) {
            if (error) {
                throw error;
            }
            res.end(data);
        });
    }

    let url = req.url;
    let message = '404';

    if (url === '/') {
        message = '根路径';
    }
    if (url === '/index') {
        readHtml('index.html');
    }
    if (url === '/login') {
        readHtml('login.html')
    }
    if (url === '/list') {
        message = 'hello list';
    }

}).listen(8080, function () {
    console.log('8080端口服务已经开启');
    
});



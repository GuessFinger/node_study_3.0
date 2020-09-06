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

    function readImage(params) {
        fs.readFile(path.join(__dirname, 'images', params), function (error, data) {
            if (error) {
                throw error;
            }
            res.setHeader('Content-Type', 'image/png');
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

    // 为什么需要这样的处理呢  如果你请求的index的页面里面包含一张图片  它就会再发送一个图片的请求  所以我们还是要处理图片的请求
    //  这里面还有一个问题 因为他是图片信息 所以我们需要设置 headers Content-Type
    //  可以在  开源中国-在线工具 Mime-type 去查看
    if (url === '/images/index.png') {
        // 表示用户请求images 下的index.png图片

        readImage('index.png');
    }

    if (url === '/css/index.css') {
        // 如果你在index里面引入 index.css文件 那么还是需要处理 index.css文件的请求
    }

}).listen(8080, function () {
    console.log('8080端口服务已经开启');
    
});



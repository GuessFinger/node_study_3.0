// 创建一个http模块

// 加载http模块
let http = require('http');

// 创建一个http服务对象
let serve = http.createServer();

// 监听用户的请求事件
serve.on('request', function (req, res) {

    // 针对下面的的message 是有一定问题的 你这种中文传递给浏览器  它是不知道你的编码格式的 所以我们需要响应报文头
    // 告诉浏览器编码格式
    // res.setHeader('Content-Type', 'text/plain;charset=utf-8');
    // res.write('hello world!!! 你好 世界');
    // 对于一个响应  一定要记得关闭响应

    // 如果我们采用上面的报文头 write里面的h1将不会被解析  我们改成text/html 就可以了
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    res.write('hello <h1>world</h1>');

    res.end();
});

// 启动服务
serve.listen(8080, function () {
    console.log('服务器启动了');
});



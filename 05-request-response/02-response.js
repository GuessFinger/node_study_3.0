const http = require('http');

http.createServer(function (req, res) {

    // res.setHeader() 来设置响应报文头
    // 响应报文头必须在 response.write() 和 response.end() 之前
    res.setHeader('Content-Type', 'text/plain;charset=utf-8');

    // res.statusCode 设置http状态响应码  如果状态码记不住的话 也去查
    // 一般 statusCode statusMessage 和setHeader 一起使用的
    // 还需要注意一点  statusMessage 里面不能有中文  会报错
    res.statusCode = '404';
    // res.statusMessage = '你好';
    res.statusMessage = 'not found';

    // res.writeHeader()
    // 相当于把 res.setHeader()  res.statusCode res.statusMessage
    // res.writeHead('200', 'not found', {
    //     'Content-Type': 'text/plain;charset=utf-8'
    // });


    // 向浏览器发送数据  第一个参数发送数据  第二个参数 对前面的数据用什么编码格式进行写入 最后一个就是回调函数
    // res.write(chunk[,encoding][,callback])
    // res.write('hello world 你好 世界')

    // res.end([data][,encoding][,callback])
    // 该方法会通知服务器 所有的响应头和响应主体都已经被发送了 即服务器将视为已完成
    // 如果想要响应数据的话 data 必须是 string /Buffer




    res.end('65');

}).listen(8880, function () {
    console.log('8880端口已经启动');
});
// 将render函数挂载到res对象上

const http = require('http');
const path = require('path');
const fs = require('fs');
const url = require('url');

http.createServer(function (req,res) {

    // 这样就定义好了
    res.render = function (fileName) {
        console.log(fileName);
        fs.readFile(fileName, function (error,data) {
            // ..... 函数执行主体
        });
    };


    if (req.url === '/') {
        // 我们再用的时候 就可以直接用下面的语句执行了
        res.render('xxx');
        res.end('ok');
    }
    if (req.url.startsWith("/add")) {
        // 我们加载url模块就是为了解决   get请求  /add?text=jfkdjsafkldj&age=kdsjfkaldj 这样的参数我们也不好取参数
        // url.parse会根据请求的url把它解析成一个对象 我们参照图片可以获取你想要的属性
        // 第二个参数 把属性里面的也解析成对象形式
        console.log(url.parse(req.url));
        let obj = url.parse(req.url, true);
        // 所以我们想要获得参数text的值
        console.log(obj.query.text);
        res.end('ok');
    }

    if (req.url.startsWith('/hello')) {
        // 我们可以设置响应报文头  告诉浏览器进行跳转
        // 下面就是实现方法  注意 statusCode和statusMessage 必须进行设置
        res.statusCode = '302';
        res.statusMessage = 'new page';
        res.setHeader('Location', '/');
        res.end();
    }

    if (req.url.startsWith("/world") && req.method === 'post') {
        // 上面我们是获取get的方法  如果提交方法是post呢
        // 因为post的提交方式 数据量可能比较大 所以会分多次进行提交
        // 此时想要在服务器中获取用户提交的数据 我们必须监听request对象的data事件
        // 那么什么时候才表示浏览器把所有的数据都提交到了服务器呢？ 监听 request对象的end事件


        let array = [];
        // request对象的data事件
        req.on('data', function (chunk) {
            // chunk 就是你提交的一块数据  它的类型是 Buffer对象
            array.push(chunk);
        });

        req.on('end',function () {
            // 我们现在把数据汇总一下就可以了
            let data = Buffer.concat(array);
        })

    }

}).listen(8080,function () {
    console.log('服務已經啓動了');
});

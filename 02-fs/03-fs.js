var fs = require('fs');

fs.readFile('./hello.txt', 'utf8', function (error, data) {
    if (error) {
        throw error;
    }
    console.log(data.toString());
});

// 上面的代码 有两种路径执行方式
// 一种是 我们在当前路径下执行  所以  ./hello.txt  这个是没有问题
// 另一种是  我们在D盘下执行 node D:\code\coding\node_study_3.0\02-fs\3-fs.js  这样就是有问题的  因为相对于D盘路径下没有
//     hello.txt文件
// 总体来说  ./相对路径  相对的是 执行node命令的路径


// __dirname: 当前正在执的js文件所在的目录
// __filename: 当前正在执行的js文件的完整路径

console.log(__dirname);
console.log(__filename);

// 针对上面的问题我们该怎么解决呢
var filePath = __dirname + '\\hello.txt';
fs.readFile(filePath, 'utf8', function (error, data) {
    if (error) {
        throw error;
    }
    console.log(data.toString());
});


// 注意 我们使用这两个的时候 没有require  但是他们不是全局的
// 我们在执行node 03.js 的时候  相当于把03.js放到沙箱中执行 也就是你在执行的时候 他们的值是传进去的
// (function (__dirname,__filename,....) {
//  03.js中的代码
// })("dirname路径", "filename路径",.....);


// 上面的情况 虽然结局了路径问题 但是拼接的方式 是通过 + \\ 的方式  如果是在linux的环境下 这肯定是不ok的
// 所以引出 我们path模块  自动帮我们解决路径问题 path.join
var path = require('path');

var fileNamePath = path.join(__dirname, 'hello.txt');
console.log(fileNamePath);

fs.readFile(fileNamePath, 'utf8', function (error,data) {
    if (error) {
        throw error;
    }
    console.log('我又成功读取出来了:' + data.toString());
});


// 创建文件夹  fs.mkdir('文件夹名称',function(error){})
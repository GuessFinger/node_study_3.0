
// 执行文件操作

// 实现文件写入操作

const fs = require('fs');
const message = "hello world";


// fs.writeFile(file,data[,options],callback)
// 文件的路径  可以是多种类型
// 需要写入的数据
// 编码格式 因为被花括号包裹着 所以是可选参数
// callback 回调函数执行完成后执行的函数
// 实现文件写入操作

// callback 函数里面的参数关于error的  如果response == null 表示写入成功
// 需要说明下 如果当前文件夹下没有hello.txt 它会自动帮你创建
fs.writeFile('./hello.txt',message,'utf-8',function (response) {
    if (response === null) {
        console.log('文件写入成功');
    } else {
        console.log('文件写入失败');
    }
});





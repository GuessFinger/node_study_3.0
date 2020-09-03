
// 执行文件操作

// 实现文件写入操作

const fs = require('fs');
const message = "hello world 你好 世界";


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


// 读取文件
// fs.readFile(file[,options],callback)
// file 文件名称
// options 编码格式
// callback有两个参数  一个是error 另一个是data

fs.readFile('./hello.txt', function (error,data) {
    if (error) {
        throw error;
    }
    // data的数据类型是Buffer对象  里面保存的是一个一个字节  如果想要获取里面的String
    console.log(data);
    //  我们可以把Buffer对象转换的String  里面传的参数是编码  默认是utf8  老师建议我们把需要的编码格式添加上
    console.log(data.toString());
    console.log(data.toString("utf8"));
});

// 读取文件第二个参数 就是文字的编码格式
fs.readFile('./hello.txt', 'utf8', function (error,data) {
    if (error) {
        throw error;
    }
    console.log(data.toString());
});
function add(x, y) {
    return x + y;
}

var result = add(1, 2);
console.log(result);


// 下面使用module.exports 都可以  字符串  数字 对象 函数
// module.exports = 'hello world';
// module.exports = 1236
// module.exports = function () {
//     console.log(1);
// };
//
// module.exports.name = 'ez';
// module.exports.age = 12;


// exports

// exports 和 module.exports 默认情况下 指向同一个对象
// 最终require() 返回的是 module.exports里面的数据
module.exports.name = 'ez';
exports.age = 12;
exports.show = function () {
    console.log(this.age + ":" + this.name);
};
// 下面的语句 又把 module.exports 指向另一个内存
// module.exports = 'hello world';

// 又指向了另一块地址  因为最终返回的是  module.exports  所以如果下面的这种方式 不会对module.exports有什么影响
exports = 'hello world';
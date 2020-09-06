let fs = require('fs');

try {
    fs.writeFile('./xxx/hell0.txt', 'hello world', 'utf8', function (error) {
        if (error) {
            throw  error;
        }
    });
} catch (e) {
    console.log('看看能不能捕获到');
}
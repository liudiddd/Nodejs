
let username = 'Jack'
// 使用function定义一个类，该function就是类的构造函数
function hello(){
    let name;
    this.setName = function(thyname){
        name = thyname;
    };
    this.sayHello = function(){
        console.log('hello ' + name);
    }
    this.hiJack = function() {
        console.log('username:', username)
    }
}

// 导出模块
// exports是一个空对象，用来声明接口的，声明模块中有哪些对象可以对外使用
exports.hello = hello; // 引入方式： let hello = require('./hello.js').hello;
module.exports = hello; // 引入方式： let hello = require('./hello.js');


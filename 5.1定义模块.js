
// Node.js中，一个模块就是一个js文件，模块对外可见的属性由exports对象导出

let name;

exports.setName = function(thyname){
    name = thyname;
}

exports.sayHello = function(){
    console.log('hello ' + name);
}
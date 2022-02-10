let util = require('util');

// 基类
function Base(){
    let code = 100; // 私有属性
    this.name = 'Base'; // 共有属性
    this.base = 2012;
    // sayHello方法不是原型中的方法，而是Base类私有的方法
    this.sayHello = function(){
        console.log('hello ', this.name, ' this year is ', this.base);
    }
}
// 基类原型中添加一个方法showName。原型中的方法，所有实例都可以访问。
Base.prototype.showName = function(){
    console.log(this.name);
}
Base.prototype.sayHello = function(){
    console.log('sayHello');
}

// 子类
function Sub(){
    this.name = 'Sub';
}

// 让子类继承基类
util.inherits(Sub, Base);

let objBase = new Base();
objBase.sayHello(); // 原型中和构造函数中有同名的方法时，会调用私有方法(ownProperties)
objBase.showName();

let objSub = new Sub();
objSub.sayHello();
objSub.showName();







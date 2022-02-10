let hello = require('./6.1定义模块2');

let h1 = new hello();
h1.setName('Zhangsan');
h1.sayHello(); // hello Zhangsan

let h2 = new hello();
//h2.setName('Lisi'); // hello undefined
h2.sayHello();

// 与5.2相比，想要创建两个实例时，不用引入两次模块了，new一次就创建一个实例

let username = 'Rose'
h2.hiJack() 


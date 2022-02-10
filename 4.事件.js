let EventEmitter = require('events').EventEmitter;

let event = new EventEmitter();
// 注册事件myevent与回调函数1
event.on('myevent',function(){
    console.log('myevent callback1');
});
// 注册事件myevent与回调函数2
event.on('myevent',function(){
    console.log('myevent callback2');
});


// 触发事件myevent，一次回调所有注册在该事件上的回调函数
setTimeout(function(){
    event.emit('myevent');
}, 1000);

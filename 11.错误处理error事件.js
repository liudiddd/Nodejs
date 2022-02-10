let EventsEmitter = require('events').EventEmitter;

let emitter = new EventsEmitter();
emitter.emit('error'); // 发射一个error事件，error事件的回调函数已经注册了，就是打印堆栈信息

function doSomeThing(data, callback){
    console.log('doSomeThing start');
    // 注册异步函数，2秒后触发
    setTimeout(function () {
        console.log('doSomeThing timeout data: ' + data);
    }, 2000);
    // 注册异步函数，添加到任务队列中，待当前同步代码执行完后，依次执行异步队列中的函数
    process.nextTick(function(){
        callback(data);
    });
}

doSomeThing('hello', function(data){
    console.log('callback data: ' + data);
});

console.log('end sync');
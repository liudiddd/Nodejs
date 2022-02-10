console.log(global);

console.log(process.argv);

// 恢复输入流，控制台会一直等待输入，打印输出，然后继续等待，一直这样循环 
process.stdin.resume();
process.stdin.on('data', function(data){
    process.stdout.write('read from console: ' + data.toString())
})
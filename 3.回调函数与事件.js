let fs = require('fs');
// 异步读取文件，function为注册的回调函数，注册完回调函数继续往下执行，待文件读取完时触发事件，回调函数被调用
fs.readFile('d:/file.txt', 'utf-8', function(err, data){
   if(err){
       console.log(err);
   }else{
       console.log(data);
   }
});
console.log('end');

// 同步式读取文件
let data = fs.readFileSync('d:/file.txt', 'utf-8'); // 不注册回调函数，阻塞读，读完才往下继续执行 
console.log(data);
console.log('end sync');


let http = require('http')
let url = require('url')

http.createServer(function(req, resp){
    if(req.url != '/favicon.ico'){
        console.log(req.url) // 浏览器输入 http://localhost:3000/hello，打印 /hello
    }

    //第一个参数是地址，第二个参数为true表示把get传值转换为对象
    //
    let result = url.parse(req.url, true)
    console.log(result);
    console.log(result.query);
    console.log(result.query);
    console.log(result.query.aid);

    resp.writeHead(200, {'Content-Type':'text/html'});
    resp.write('<h1>hello world</h1>');
    resp.end('<p>pack1</p>'); // end表示http响应结束
}).listen(3000);

console.log('HTTP Server is listening at 3000');

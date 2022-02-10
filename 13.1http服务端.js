let http = require('http');
let querystring = require('querystring');
let util = require('util');

http.createServer(function(req, res){
    let post = '';
    // 注册data事件监听函数，每当受到请求体的数据都会触发
    req.on('data', function(chunk){
        post += chunk;
    });
    // 注册end事件，当请求体传送完了触发
    req.on('end', function(){
        // 解析字符串，返回一个json对象
        post = querystring.parse(post);
        // 向前端返回
        res.end(util.inspect(post))
    })
});
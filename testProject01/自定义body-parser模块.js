const qs = require('querystring') 
function bodyParser(req, res, next) {
    let str = ''
    // 监听req的data事件
    req.on('data', (chunk) => {
        str += chunk 
    })
    // 监听req的end事件，表示数据接收完毕 
    req.on('end', () => {
        console.log('数据接收完毕：', str)
        // 使用nodejs内置的querystring模块解析form查询字符串 
        let body = qs.parse(str)
        // console.log(body)
        req.body = body
        next() 
    })
}
// 导出模块 
module.exports = bodyParser 

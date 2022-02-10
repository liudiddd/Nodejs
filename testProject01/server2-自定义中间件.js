const express = require('express')

const app = express() 

const qs = require('querystring')

// 自定义中间件，解析表单数据
app.use((req, res, next) => {
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
})

app.post('/book', (req, res) => {
    console.log('/book', req.body)
    res.send(req.body)
})


app.listen(8012, () => {
    console.log('server is litening at http://127.0.0.1:8012')
})




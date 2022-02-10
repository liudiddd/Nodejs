// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express() 

app.use(express.static('./static'))

// json 中间件用于解析客户端json格式的数据 
app.use(express.json())

// 通过 express.urlencoded 这个中间件来解析表单中的url-encoded 格式的数据 
app.use(express.urlencoded({extended: false}))

// 定义路由
app.get('/', (req, res) => {
    // 人为制造错误
    throw new Error('服务器内部发生了错误！')
    res.send('Home Page.')
})
app.post('/user', (req, res) => {
    // 在服务器，可以使用 req.body 这个属性来接收客户端发送过来的请求体数据
    // 默认情况下，如果不配置解析表单数据的中间件，则 req.body 默认等于 undefined 
    
    console.log(req.body)
    res.send('ok')
})

app.post('/book', (req, res) => {
    // 在服务端可以通过 req.body 来获取 json 格式的数据和 url-encoded 格式的数据 
    console.log(req.body)
    res.send('ok')
})



// 错误处理中间件，必须注册在所有路由之后。其他中间件必须在路由之前配置 
app.use((err, req, res, next) => {
    console.log('error handler middleware ：', err.message)
    res.send('Error:', err.message)
})

// 调用 app.listen 方法，指定端口号并启动web服务器 
app.listen(8011, () => {
    console.log('Express server running at http://127.0.0.1')

})
const express = require('express')

const app = express() 

// 导入自定义body-parser中间件 
const bodyParser = require('./自定义body-parser模块')
// 注册中间件 
app.use(bodyParser)

// 路由 
app.post('/book', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})



app.listen(8013, () => {
    console.log('server is litener at http://127.0.0.1:8013')
})






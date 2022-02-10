// 导入express
const express = require('express')
const app = express() 


// 中间件 支持跨域 
const cors = require('cors')
app.use(cors())

// 中间件 解析表单
app.use(express.urlencoded({extended: false}))

// 中间件 解析json 
app.use(express.json())

// 响应数据中间件 
app.use((req, res, next) => {
    // status 0 成功，1 失败，默认值1，方便处理失败情况 
    res.cc = (err, status = 1) => {
        res.send({
            status,
            message: err instanceof Error ? err.message : err 
        })
    }
    next() 
})




// 只要express-jwt这个中间件配置成功了，就可以把解析出来的用户信息挂载到req.user属性上 
const auth = require('./auth')
app.use(auth.expressJWT({secret: auth.secretKey, algorithms: ['HS256']}).unless({path: [/^\/user\/(login)|(regUser)/]}))

// 绑定路由
const router = require('./router')
app.use('/', router)

// 






// 注册全局错误处理中间件，注意，错误处理中间件一定要写在所有中间件的最后
const { ValidationError } = require('joi')
app.use((err, req, res, next) => {
    // jwt token 解析失败（过期或不合法）导致的错误
    if(err.name === 'UnauthorizedError') {
        return res.send({status: 401, message: '无效的Token'})
    } else if(err instanceof ValidationError) { 
        // 表单验证
        return res.send({status: 400, message: err.message})
    }
    

    res.send({status: 500, message: '未知错误'})
})


// 启动服务器 
app.listen(8001, () => {
    console.log('server is started at http://127.0.0.1:8001')
})











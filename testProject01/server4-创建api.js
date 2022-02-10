const { urlencoded } = require('body-parser')
const express = require('express')
const app = express() 


// 统一设置支持跨域，自己手动 
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*')
//     res.header('Access-Control-Allow-Headers', 'Authorization,X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method' )
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, PUT, DELETE')
//     res.header('Allow', 'GET, POST, PATCH, OPTIONS, PUT, DELETE')
//     next()
// })
// 使用中间件支持跨域 
const cors = require('cors')
app.use(cors())

// 用于解析post请求中的body 
app.use(express.urlencoded({extended: false}))


// session身份认证   npm i express-session 使用session，会设置req.session属性 
// const session = require('express-session')
// app.use(session({
//     secret: 'keyboard cat', // secret属性的值可以为任意字符串
//     resave: false,  // 固定写法
//     saveUninitialized: true // 固定写法
// }))





// 导入并注册api路由模块 
const rt = require('./自定义Router路由模块')
// expressJWT({secret: rt.secretKey}) 就是用来解析Token的中间件
// .unless({path: [/^\/api\//]})) 用来指定哪些接口不需要访问权限 
// 只要express-jwt这个中间件配置成功了，就可以把解析出来的用户信息挂载到req.user属性上 
app.use(rt.expressJWT({secret: rt.secretKey, algorithms: ['HS256']}).unless({path: [/^\/api\/login/]}))
app.use('/api', rt.apiRouter) // 把apiRouter注册在/api上，称为全局中间件 






// 注册全局错误处理中间件，注意，错误处理中间件一定要写在所有中间件的最后
app.use((err, req, res, next) => {
    // jwt token 解析失败（过期或不合法）导致的错误
    if(err.name === 'UnauthorizedError') {
        return res.cc('无效的Token')
    }
    // Joi 参数校验失败
    res.cc('未知错误')
})

app.listen(8015, () => {
    console.log('server is listening at http://127.0.0.1:8015')
})
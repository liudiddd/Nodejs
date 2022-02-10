const express = require('express')
const apiRouter = express.Router() 


// bind your router here - start 
apiRouter.get('/get', (req, res) => {
    // req.query获取客户端查询字符串 
    const query = req.query
    res.send({
        status: 0,
        msg: 'GET请求成功!',
        data: query
    })
})
apiRouter.get('/get/jsonp', (req, res) => { // jsonp版本，支持跨域 
    // req.query获取客户端查询字符串 
    const callback = req.query.callback
    delete req.query.callback 
    let resData = JSON.stringify(req.query)
    res.send(`${callback}(${resData})`)
})


apiRouter.post('/post', (req, res) => {
    // req.body获取客户端请求体中URL-encoded数据
    const body = req.body 
    res.send({
        status: 0,
        msg: 'post请求成功',
        data: body
    })
})
apiRouter.post('/post/cors', (req, res) => { // cors支持跨域 
    // req.body获取客户端请求体中URL-encoded数据
    const body = req.body 
    res.setHeader("Content-Type", "application/json;charset=utf-8")
    res.send({
        status: 0,
        msg: 'post请求成功',
        data: body
    })
})

// 测试session 
// apiRouter.post('/login', (req, res) => {
//     if(req.body.username !== 'admin' || req.body.password !== '000000') {
//         res.send({status: 1, msg: '登录失败'})
//         return 
//     }
//     req.session.user = req.body 
//     req.session.isLogin = true
//     res.send({status: 0, msg: '登录成功'})
// })
// apiRouter.post('/username', (req, res) => {
//     let user = req.session.user
//     if(user && user.username) {
//         res.send({status: 0, msg: 'success', username: user.username}) 
//     } else {
//         res.send({status: 0, msg: '未登录'})
//     }
// })
// apiRouter.post('/logout', (req, res) => {
//     req.session.destroy() // 清空session
//     res.send({status: 0, msg: '退出登录成功'})
// })

// 测试jwt
// jwt身份认证（推荐使用）JSON Web Token，无跨域问题。 npm i jsonwebtoken express-jwt 
const jwt = require('jsonwebtoken') // 用于生成jwt字符串 
const expressJWT = require('express-jwt') // 用于将jwt字符串还原成json对象 
const secretKey = '1qaz@WSX ^-^'
apiRouter.post('/login', (req, res) => {
    if(req.body.username !== 'admin' || req.body.password !== '000000') {
        res.send({status: 1, msg: '登录失败'})
        return 
    }
    res.send({
        status: 0,
        msg: '登录成功',
        token: jwt.sign({username:req.body.username}, secretKey, {expiresIn: '100s'})
    })
})
// 用户的请求头中需要加入 Authorization: Bearer jwt加密字符串，然后express-jwt就会自动从Authorization中取并解密了，并挂到req.user。
apiRouter.post('/username', (req, res) => {
    // console.log(req.user)
    if(req.user && req.user.username) {
        res.send({status: 0, msg: 'success', data: req.user})
    } else {
        res.send({status: 1, msg: '未登录'})
    }
})



// bind your router here - end 


module.exports = {apiRouter, jwt, expressJWT, secretKey}


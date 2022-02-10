const express = require('express')
// 创建一个路由对象 
const router = express.Router()

// 导入路由处理函数
const handler = require('../router_handler/user')

// 注册新用户 
router.post('/reguser', handler.regUser)

// 登录 
router.post('/login', handler.login)



// 导出模块
module.exports = router


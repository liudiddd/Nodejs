const express = require('express')
// 创建一个路由对象 
const router = express.Router()

// 导入路由处理函数
const handler = require('../router_handler/my')

// 查询我的信息
router.get('/userinfo', handler.userinfo)

// 更新我的信息
router.post('/userinfo', handler.updateUserinfo)

// 更新密码 
router.post('/updatepwd', handler.updatePwd)



// 导出模块
module.exports = router


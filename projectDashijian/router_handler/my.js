const db = require('../db') // 数据库 
const bcryptjs = require('bcryptjs')
const schema = require('../schema') // 表单校验 
const validationUtil = require('./validation_util') // 表单校验 
const auth = require('../auth') // 身份认证 

// 查询我的信息 
exports.userinfo = (req, res) => {
    let info = {username: req.user.username}
    // 1.检测表单数据是否合法；
    validationUtil(schema.mySchema.userinfo, info) // 验证失败抛异常，被全局错误处理器处理 
    
    // 2.查询用户 
    let sql = 'select * from ev_users where username=?'
    db.query(sql, info.username, (err, results) => {
        // 执行sql语句失败
        if(err) {
            return res.cc(err)
        }
        // 用户不存在 
        if(results.length === 0) {
            return res.cc('用户不存在！')
        }
        let user = results[0]
        delete user.password 
        res.json({
            status: 0,
            message: 'success',
            data: user
        })
    })
    
}

// 更新用户信息  
exports.updateUserinfo = (req, res) => {
    let info = {...req.body, username: req.user.username}
    // 1.检测表单数据是否合法；
    validationUtil(schema.mySchema.updateUserinfo, info) // 验证失败抛异常，被全局错误处理器处理 
    
    // 2.查询用户 
    let sql = 'select * from ev_users where username=?'
    db.query(sql, info.username, (err, results) => {
        // 执行sql语句失败
        if(err) {
            return res.cc(err)
        }
        // 用户不存在 
        if(results.length === 0) {
            return res.cc('用户不存在！')
        }
        let sql2 = 'update ev_users set ? where id=?'
        db.query(sql2, [info, results[0].id], (err, results) => {
            // 执行sql语句失败
            if(err) {
                return res.cc(err)
            }
            // 更新失败 
            if(results.affectedRows !== 1) {
                return res.cc('更新失败！')
            }
            res.json({
                status: 0,
                message: 'success',
                data: results
            })
        })
    })
}

// 更新密码   
exports.updatePwd = (req, res) => {
    let info = {...req.body, username: req.user.username}
    console.log(info)
    // 1.检测表单数据是否合法；
    validationUtil(schema.mySchema.updatePwd, info) // 验证失败抛异常，被全局错误处理器处理 
    
    // 2.更新密码
    let newPwd = bcryptjs.hashSync(info.password, 10) // hashSync(明文，随机盐长度)
    let sql = 'update ev_users set password=? where id=?'
    db.query(sql, [newPwd, req.user.id], (err, results) => {
        // 执行sql语句失败
        if(err) {
            return res.cc(err)
        }
        // 更新失败 
        if(results.affectedRows !== 1) {
            return res.cc('更新失败！')
        }
        // 更新成功，使登录信息失效。简单做法是，前端页面收到success响应后，将LocalStorage或SessionStorage中的token删除 
        res.json({
            status: 0,
            message: 'success',
            data: results
        })
    })
}

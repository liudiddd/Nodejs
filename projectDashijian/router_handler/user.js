const db = require('../db')
const bcryptjs = require('bcryptjs')
const schema = require('../schema')
const validationUtil = require('./validation_util')
const auth = require('../auth')

// 注册新用户
exports.regUser = (req, res) => {
    let userinfo = req.body
    // 1.检测表单数据是否合法；
    validationUtil(schema.userSchema.regUser, userinfo) // 验证失败抛异常，被全局错误处理器处理 
    
    // 2.检测用户名是否被占用；
    let sql = 'select * from ev_users where username=?'
    db.query(sql, userinfo.username, (err, results) => {
        // 执行sql语句失败
        if(err) {
            return res.cc(err)
        }
        // 用户名被占用 
        if(results.length > 0) {
            return res.cc('用户名被占用，请更换其他用户名！')
        }
        // 3.对密码进行加密处理；
        // console.log(userinfo)
        userinfo.password = bcryptjs.hashSync(userinfo.password, 10) // hashSync(明文，随机盐长度)
        // console.log(userinfo)
        // 4.插入新用户。
        let insertSql = 'insert into ev_users set ?'
        db.query(insertSql, {username: userinfo.username, password: userinfo.password}, (err, results) => {
            // 判断sql语句是否执行成功
            if(err) return res.cc(err)
            // 判断影响行数是否为1
            if(results.affectedRows !== 1) return res.cc('用户注册失败，请稍后再试！')
            // 注册成功 
            res.cc('注册成功！', 0)
        })
    })
    
}

// 登录 
exports.login = (req, res) => {
    let userinfo = req.body
    // 1.检测表单数据是否合法；
    validationUtil(schema.userSchema.login, userinfo) // 验证失败抛异常，被全局错误处理器处理 
    
    // 2.检测用户名是否存在；
    let sql = 'select * from ev_users where username=?'
    db.query(sql, userinfo.username, (err, results) => {
        // 执行sql语句失败
        if(err) {
            return res.cc(err)
        }
        // 用户名被占用 
        if(results.length === 0) {
            return res.cc('用户不存在！')
        }
        // 3.验证密码；
        // console.log(userinfo)
        let correct = bcryptjs.compareSync(userinfo.password, results[0].password)
        if(correct) {
            return res.send({
                status: 0,
                message: '登录成功',
                token: 'Bearer ' + auth.jwt.sign({username: userinfo.username, id: results[0].id}, auth.secretKey, {expiresIn: '10h'})
            })
        } else {
            res.cc('密码错误')
        }
        
    })
}
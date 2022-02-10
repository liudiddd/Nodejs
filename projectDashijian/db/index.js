// 导入mysql模块 用于连接和操作mysql
const mysql = require('mysql')

// 创建数据库连接对象
const db = mysql.createPool({
    host: '8.142.104.99',
    user: 'user1',
    password: '123456',
    database: 'dashijian'
})


// 导出 
module.exports = db 

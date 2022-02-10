// jwt身份认证（推荐使用）JSON Web Token，无跨域问题。 npm i jsonwebtoken express-jwt 
const jwt = require('jsonwebtoken') // 用于生成jwt字符串 
const expressJWT = require('express-jwt') // 用于将jwt字符串还原成json对象 
const secretKey = '1qaz@WSX ^-^'



module.exports = {
    jwt,
    expressJWT,
    secretKey
}


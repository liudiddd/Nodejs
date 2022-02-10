const Joi = require('joi')

// user模块验证规则 
// 注册 
const regUserSchema = Joi.object({
    username: Joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required(),
    password: Joi.string().pattern(/^[a-zA-Z0-9]{6,12}$/).required(),
    repeat_password: Joi.ref('password'),
    email: Joi.string().email({minDomainSegments: 2, tlds: {allow: ['com', 'net']}}) 
}).with('password', 'repeat_password')

// 登录
const loginSchema = Joi.object({
    username: Joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required(),
    password: Joi.string().pattern(/^[a-zA-Z0-9]{6,12}$/).required(),
})




exports.regUser = regUserSchema 
exports.login = loginSchema

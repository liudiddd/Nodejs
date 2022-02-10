const Joi = require('joi')

// 个人中心 
// 查询我的信息
const userinfoSchema = Joi.object({
    username: Joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required(),
})

// 更新我的信息
const updateUserinfoSchema = Joi.object({
    username: Joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required(),
    nickname: Joi.string()
                .alphanum()
                .min(3)
                .max(30),                
    email: Joi.string().email({minDomainSegments: 2, tlds: {allow: ['com', 'net']}}) 
})

// 更新密码 
const updatePwdSchema = Joi.object({
    username: Joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required(),
    password: Joi.string().pattern(/^[a-zA-Z0-9]{6,12}$/).required(),
    repeat_password: Joi.ref('password')
}).with('password', 'repeat_password')




exports.userinfo = userinfoSchema 
exports.updateUserinfo = updateUserinfoSchema 
exports.updatePwd = updatePwdSchema 


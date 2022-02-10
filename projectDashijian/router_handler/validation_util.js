module.exports = (schema, data) => {
    let {error, value} = schema.validate(data)  // error为ValidationError类型，value就是传入的data 
    if(error) {
        throw error // 验证不通过就抛出异常 
    }
}
一、创建项目：
    npm init -y
    npm i express@4.17.1
    新建app.js
二、配置跨域
    cors方式
    npm i cors@2.8.5
    const cors = require('cors')
    app.use(cors())
三、配置表单解析中间件
    解析 Content-Type:application/x-www-form-urlencoded 格式请求
四、初始化路由相关文件夹
    1.路由模块
        根目录下router目录，存放请求与处理函数的映射关系；
    2.路由处理函数模块
        根目录下router_handler目录，存放处理函数。
五、初始化路由处理模块
    在router/下新建user.js作为用户路由模块
六、抽离用户路由中的处理函数
    为了保证路由模块的纯粹性，所有的路由处理函数都抽离到对应的路由处理函数模块中。
    在router_handler/下新建user.js
七、建表 
    dashijian.ev_users
八、安装并配置mysql模块
    npm i mysql@2.18.1
九、注册功能实现 
    1.检测表单数据是否合法；
    2.检测用户名是否被占用；
    3.对密码进行加密处理；
        npm i bcryptjs@2.4.3
    4.插入新用户。
十、优化res.send代码
    注册一个全局中间件放在router前，把封装函数绑定到res.cc上，方便调用。
十一、优化表单数据验证
    使用第三方模块提高效率，降低出错风险。
    npm i joi  // 为表单中每项数据定义验证规则 
    npm i @escook/express-joi   // 对表单数据进行验证 
    新建 /schema/user.js    // 用户信息验证规则模块 
十二、登录
    添加jwt支持：
        npm i jsonwebtoken
        npm i express-jwt
        



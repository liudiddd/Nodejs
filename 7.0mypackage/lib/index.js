
/**
 * Node.js调用包的方式：let somepackage = require('./somepackage'); somepackage.sayHello();
 * Node.js在调用某个包时，会检查package.json中的main字段，将其作为包的接口模块，如果package.json或main字段不
 * 存在，会尝试寻找index.js或index.code作为包的接口
 * 使用这种方法将一个文件夹封装为一个模块
 * package.json的规范属性：
 *      name：包的名称，必须唯一
 *      description：包的简要说明
 *      version：符合语义化版本识别规范的版本字符串
 *      keywords：关键字数据，通常用于搜索
 *      maintainers：维护者数组，每个元素要包含name、email、web可选字段
 *      contributors：贡献者数组，格式与maintainers相同。包的作者应该是贡献者的第一个元素
 *      bugs：提交bug的地址，可以是网址或者电子邮件地址
 *      licenses：许可证数组，每个元素要包含type、url字段
 *      repositories：仓库托管地址数组，每个元素要包含type、url和path字段
 *      dependencies：包的依赖，一个关联数组，由包名称和版本号组成
 *
 * 可使用 npm init 创建一个标准的包
 * npm install [包名] // 安装一个包
 * npm install -g [包名] // 全局安装一个包
 * npm uninstall [包名] // 卸载包
 * npm list // 查看当前所有包
 *
 * npm本地模式安装的包安装到了node_modules子目录下
 * npm -g 全局模式安装的包安装到了 /usr/local/lib/node_modules目录下
 * 使用全局模式安装的包，在JavaScript文件中不能通过require获取到，因为require不会搜索/usr/local/lib/node_modules目录
 * 当在项目中使用全局包时，需要先通过npm install将全局包导入到项目本地中，再使用。
 */
let gname = 'anonymous';
exports.setName = function(name) {
    gname = name;
}
exports.say = function() {
    console.log('hello ' + gname);
}

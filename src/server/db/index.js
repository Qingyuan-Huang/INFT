// 配置数据库相关信息
let mysql = require('mysql')

let db = mysql.createPool({
    host: '127.0.0.1',     //数据库IP地址
    user: 'root',          //数据库登录账号
    password: 'Jianyuan0519',//数据库登录密码
    database: 'testdata',//要操作的数据库
    port:3308
})

module.exports = db

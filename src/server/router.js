let express = require('express')
let router = express.Router()
let user = require('./API/user')

// 配置对应路由
router.get('/user', user.get)

module.exports = router

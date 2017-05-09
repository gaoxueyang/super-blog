const express = require('express');
const router = express.Router();
//这是引入首页路由文件
const home = require('./routes/home')

//首页
router.get('/',home.index)

module.exports = router;
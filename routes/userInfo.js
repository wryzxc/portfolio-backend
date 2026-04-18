const express = require('express');
const router = express.Router();
const { getInfo, updateInfo } = require('../controllers/userInfo');
const authMiddleware = require('../middleware/auth');

// 获取个人信息
router.get('/', getInfo);

// 更新个人信息（需要鉴权）
router.put('/', authMiddleware, updateInfo);

module.exports = router;
const express = require('express');
const router = express.Router();
const { login } = require('../controllers/auth');

// 登录
router.post('/login', login);

module.exports = router;
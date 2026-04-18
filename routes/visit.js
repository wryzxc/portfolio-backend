const express = require('express');
const router = express.Router();
const { recordVisit, getStats, getTotalVisits } = require('../controllers/visit');
const authMiddleware = require('../middleware/auth');

// 记录访问
router.post('/', recordVisit);

// 获取访问统计（需要鉴权）
router.get('/stats', authMiddleware, getStats);

// 获取总访问量
router.get('/count', getTotalVisits);

module.exports = router;
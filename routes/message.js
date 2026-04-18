const express = require('express');
const router = express.Router();
const { getMessages, getApprovedMessages, submitMessage, updateMessageStatus, deleteMessage } = require('../controllers/message');
const authMiddleware = require('../middleware/auth');

// 获取所有留言（需要鉴权）
router.get('/', authMiddleware, getMessages);

// 获取审核通过的留言
router.get('/approved', getApprovedMessages);

// 提交留言
router.post('/', submitMessage);

// 更新留言状态（需要鉴权）
router.put('/:id', authMiddleware, updateMessageStatus);

// 删除留言（需要鉴权）
router.delete('/:id', authMiddleware, deleteMessage);

module.exports = router;
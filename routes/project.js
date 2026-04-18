const express = require('express');
const router = express.Router();
const { getProjects, getProjectById, createProject, updateProject, deleteProject } = require('../controllers/project');
const authMiddleware = require('../middleware/auth');

// 获取项目列表
router.get('/', getProjects);

// 获取项目详情
router.get('/:id', getProjectById);

// 创建项目（需要鉴权）
router.post('/', authMiddleware, createProject);

// 更新项目（需要鉴权）
router.put('/:id', authMiddleware, updateProject);

// 删除项目（需要鉴权）
router.delete('/:id', authMiddleware, deleteProject);

module.exports = router;
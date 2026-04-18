const express = require('express');
const { getDashboardData, createDashboardData, updateDashboardData, deleteDashboardData } = require('../controllers/dashboard');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.get('/', getDashboardData);

router.post('/', authMiddleware, createDashboardData);
router.put('/:id', authMiddleware, updateDashboardData);
router.delete('/:id', authMiddleware, deleteDashboardData);

module.exports = router;
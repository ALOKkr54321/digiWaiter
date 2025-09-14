const express = require('express');
const router = express.Router();
const tableController = require('../controllers/tableController');
const { verifyToken, requireRole } = require('../middleware/authMiddleware');

router.get('/', verifyToken, tableController.getTables);
router.post('/', verifyToken, requireRole('admin'), tableController.createTable);

module.exports = router;
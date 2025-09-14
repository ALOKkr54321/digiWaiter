const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');
const { verifyToken, requireRole } = require('../middleware/authMiddleware');

router.get('/', menuController.getMenuItems); // public for customer
router.post('/', verifyToken, requireRole('admin'), menuController.createMenuItem);

module.exports = router;
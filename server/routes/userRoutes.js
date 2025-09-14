const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { verifyToken, requireRole } = require('../middleware/authMiddleware');

router.get('/', verifyToken, requireRole('admin'), userController.getUsers);
router.post('/', verifyToken, requireRole('admin'), userController.createUser);

module.exports = router;
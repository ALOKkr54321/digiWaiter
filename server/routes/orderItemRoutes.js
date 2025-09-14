const express = require('express');
const router = express.Router();
const orderItemController = require('../controllers/orderItemController');
const { verifyToken } = require('../middleware/authMiddleware');

router.get('/', verifyToken, orderItemController.getOrderItems);
router.post('/', verifyToken, orderItemController.createOrderItem);

module.exports = router;
const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');
const { verifyToken } = require('../middleware/authMiddleware');

router.get('/', verifyToken, paymentController.getPayments);
router.post('/', verifyToken, paymentController.createPayment);

module.exports = router;
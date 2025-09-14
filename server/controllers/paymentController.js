const db = require('../models');
const Payment = db.Payment;

exports.getPayments = async (req, res) => {
  try {
    const payments = await Payment.findAll({ include: [db.Order] });
    res.json(payments);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch payments' });
  }
};

exports.createPayment = async (req, res) => {
  try {
    const { orderId, method, status, transactionId } = req.body;
    const payment = await Payment.create({ orderId, method, status, transactionId });
    res.status(201).json(payment);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create payment' });
  }
};
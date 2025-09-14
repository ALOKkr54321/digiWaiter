const db = require('../models');
const OrderItem = db.OrderItem;

exports.getOrderItems = async (req, res) => {
  try {
    const items = await OrderItem.findAll({ include: [db.MenuItem] });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch order items' });
  }
};

exports.createOrderItem = async (req, res) => {
  try {
    const { orderId, menuItemId, quantity, price } = req.body;
    const item = await OrderItem.create({ orderId, menuItemId, quantity, price });
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create order item' });
  }
};
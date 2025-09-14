const db = require('../models');
const Order = db.Order;
const OrderItem = db.OrderItem;

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({ include: [db.User, db.Table, db.OrderItem] });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
};

exports.createOrder = async (req, res) => {
  try {
    const { userId, tableId, items } = req.body;

    const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const order = await Order.create({ userId, tableId, totalAmount });

    const orderItems = items.map(item => ({
      orderId: order.id,
      menuItemId: item.menuItemId,
      quantity: item.quantity,
      price: item.price
    }));

    await OrderItem.bulkCreate(orderItems);

    res.status(201).json({ order, orderItems });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create order' });
  }
};
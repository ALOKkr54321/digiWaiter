const db = require('../models');
const MenuItem = db.MenuItem;

exports.getMenuItems = async (req, res) => {
  try {
    const items = await MenuItem.findAll({ where: { isAvailable: true } });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch menu items' });
  }
};

exports.createMenuItem = async (req, res) => {
  try {
    const { name, category, price, imageUrl, isAvailable } = req.body;
    const item = await MenuItem.create({ name, category, price, imageUrl, isAvailable });
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create menu item' });
  }
};
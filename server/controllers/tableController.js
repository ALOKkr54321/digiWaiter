const db = require('../models');
const Table = db.Table;

exports.getTables = async (req, res) => {
  try {
    const tables = await Table.findAll();
    res.json(tables);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tables' });
  }
};

exports.createTable = async (req, res) => {
  try {
    const { tableNumber, status } = req.body;
    const table = await Table.create({ tableNumber, status });
    res.status(201).json(table);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create table' });
  }
};
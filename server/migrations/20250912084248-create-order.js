'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      userId: {
        type: Sequelize.INTEGER,
        references: { model: 'Users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      tableId: {
        type: Sequelize.INTEGER,
        references: { model: 'Tables', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      status: { type: Sequelize.ENUM('pending', 'preparing', 'ready', 'served'), defaultValue: 'pending' },
      totalAmount: Sequelize.FLOAT,
      paymentStatus: { type: Sequelize.ENUM('pending', 'paid', 'failed'), defaultValue: 'pending' },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Orders');
  }
};
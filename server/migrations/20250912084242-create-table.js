'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tables', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      tableNumber: Sequelize.INTEGER,
      status: { type: Sequelize.ENUM('available', 'occupied'), defaultValue: 'available' },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Tables');
  }
};
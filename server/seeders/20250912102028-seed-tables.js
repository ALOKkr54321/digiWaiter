'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Tables', [
      { tableNumber: 1, status: 'available', createdAt: new Date(), updatedAt: new Date() },
      { tableNumber: 2, status: 'available', createdAt: new Date(), updatedAt: new Date() },
      { tableNumber: 3, status: 'occupied', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tables', null, {});
  }
};
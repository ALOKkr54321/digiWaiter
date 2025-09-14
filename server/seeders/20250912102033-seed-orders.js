'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Orders', [
      {
        userId: 2, // Assuming Customer One has ID 2
        tableId: 3, // Assuming Table 3 is occupied
        status: 'preparing',
        totalAmount: 280,
        paymentStatus: 'paid',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        tableId: 1,
        status: 'pending',
        totalAmount: 100,
        paymentStatus: 'pending',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Orders', null, {});
  }
};
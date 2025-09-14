'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('OrderItems', [
      {
        orderId: 1,
        menuItemId: 1, // Paneer Tikka
        quantity: 1,
        price: 180,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderId: 1,
        menuItemId: 2, // Butter Naan
        quantity: 2,
        price: 40,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderId: 2,
        menuItemId: 3, // Gulab Jamun
        quantity: 2,
        price: 60,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('OrderItems', null, {});
  }
};
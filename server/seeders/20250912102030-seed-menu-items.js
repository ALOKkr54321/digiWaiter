'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('MenuItems', [
      {
        name: 'Paneer Tikka',
        category: 'Starters',
        price: 180,
        imageUrl: 'https://example.com/images/paneer-tikka.jpg',
        isAvailable: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Butter Naan',
        category: 'Main Course',
        price: 40,
        imageUrl: 'https://example.com/images/butter-naan.jpg',
        isAvailable: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Gulab Jamun',
        category: 'Desserts',
        price: 60,
        imageUrl: 'https://example.com/images/gulab-jamun.jpg',
        isAvailable: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('MenuItems', null, {});
  }
};
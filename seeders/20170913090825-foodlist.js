'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('FoodLists', [{
      food: 'Ayam Goreng',
      amount: 30,
      price: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      food: 'Bebek Goreng',
      amount: 20,
      price: 17000,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
        food: 'Tahu Goreng',
        amount: 50,
        price: 2000,
        createdAt: new Date(),
        updatedAt: new Date()
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};

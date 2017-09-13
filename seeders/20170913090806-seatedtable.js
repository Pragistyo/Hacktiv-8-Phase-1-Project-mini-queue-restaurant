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
    return queryInterface.bulkInsert('SeatingTables', [{
      tableName: 'A01',
      capasity: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tableName: 'A02',
      capasity: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tableName: 'A03',
      capasity: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tableName: 'A04',
      capasity: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tableName: 'A05',
      capasity: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tableName: 'A06',
      capasity: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tableName: 'A07',
      capasity: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tableName: 'A08',
      capasity: 4,
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

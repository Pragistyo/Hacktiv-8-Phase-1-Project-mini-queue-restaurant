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
    return queryInterface.bulkInsert('Waiters', [{
      nama: 'Bani',
      jabatan: 'trainee',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nama:'Yosua',
      jabatan:'trainee',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nama:'Hary',
      jabatan:'senior',
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

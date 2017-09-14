'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('SeatingTableWaiters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      SeatingTableId: {
        type: Sequelize.INTEGER
      },
      WaiterId: {
        type: Sequelize.INTEGER
      },
      tanggal: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      noAntrian: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('SeatingTableWaiters');
  }
};

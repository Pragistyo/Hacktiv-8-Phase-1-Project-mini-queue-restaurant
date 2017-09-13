'use strict';
module.exports = function(sequelize, DataTypes) {
  var SeatingTableWaiter = sequelize.define('SeatingTableWaiter', {
    SeatingTableId: DataTypes.INTEGER,
    WaiterId: DataTypes.INTEGER,
    tanggal: DataTypes.STRING,
    status: DataTypes.STRING,
    noAntrian: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return SeatingTableWaiter;
};
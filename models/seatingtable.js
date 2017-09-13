'use strict';
module.exports = function(sequelize, DataTypes) {
  var SeatingTable = sequelize.define('SeatingTable', {
    tableName: DataTypes.STRING,
    capasity: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  
  SeatingTable.association = models=>{
    SeatingTable.belongsToMany(models.Waiter,{through:'SeatingTableWaiter'})
    SeatingTable.hasMany(models.SeatingTableWaiter)
  }
  return SeatingTable;
};
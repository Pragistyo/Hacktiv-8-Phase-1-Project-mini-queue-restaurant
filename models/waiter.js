'use strict';
module.exports = function(sequelize, DataTypes) {
  var Waiter = sequelize.define('Waiter', {
    nama: DataTypes.STRING,
    jabatan: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  Waiter.association = models=>{
    Waiter.belongsToMany(models.SeatingTable,{through:'SeatingTableWaiter'})
    Waiter.hasMany(models.SeatingTableWaiter)
  }
  return Waiter;
};
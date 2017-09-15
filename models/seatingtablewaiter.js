'use strict';
module.exports = function(sequelize, DataTypes) {
  var SeatingTableWaiter = sequelize.define('SeatingTableWaiter', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
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

  SeatingTableWaiter.associate = models=>{
    SeatingTableWaiter.belongsTo(models.Waiter, {foreignKey: 'WaiterId'})
    SeatingTableWaiter.belongsTo(models.SeatingTable, {foreignKey: 'SeatingTableId'})
    SeatingTableWaiter.belongsTo(models.FoodList)
  }
  return SeatingTableWaiter;
};
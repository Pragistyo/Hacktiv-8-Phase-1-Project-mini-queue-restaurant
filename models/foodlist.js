'use strict';
module.exports = function(sequelize, DataTypes) {
  var FoodList = sequelize.define('FoodList', {
    food: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  FoodList.associate = models=>{
    FoodList.hasMany(models.SeatingTableWaiter)
    // FoodList.belongsTo(models.SeatingTable)
    FoodList.belongsToMany(models.SeatingTable,{through:'SeatingTableWaiter'})
    // SeatingTable.belongsToMany(model.SeatingTableWaiter)
  }
  return FoodList;
};
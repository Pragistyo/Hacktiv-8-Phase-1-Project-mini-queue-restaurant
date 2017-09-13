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
  return FoodList;
};
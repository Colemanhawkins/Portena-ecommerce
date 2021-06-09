const { DataTypes } = require('sequelize')

module.exports = function (sequelize) {
    return sequelize.define('product', {
       name: {
          type: DataTypes.CHAR,
          allowNull: false
     },
    });
}
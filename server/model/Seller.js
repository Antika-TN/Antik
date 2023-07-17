const { DataTypes } = require('sequelize');
const sequelize = require('../db/db.connect');
const User = require('./user');

const Seller = sequelize.define('Seller', {
  companyName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Seller.belongsTo(User);

module.exports = Seller;

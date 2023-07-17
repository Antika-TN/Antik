const { DataTypes } = require('sequelize');
const Client = require('./Client');
const sequelize = require('../db/db.connect');

const Order = sequelize.define('Order', {
  orderDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  totalAmount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

Order.belongsTo(Client);

module.exports = Order;

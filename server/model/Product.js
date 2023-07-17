const { DataTypes } = require('sequelize');
const sequelize = require('../db/db.connect');
const Category = require('./Category');
const Seller = require('./Seller');

const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Product.belongsTo(Category);
Product.belongsTo(Seller);

module.exports = Product;

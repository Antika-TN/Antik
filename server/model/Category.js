const { DataTypes } = require('sequelize');
const sequelize = require('../db/db.connect');

const Category = sequelize.define('Category', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Category;

const { DataTypes } = require('sequelize');
const sequelize = require('../db/db.connect');

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  role: {
    type: DataTypes.ENUM('user', 'admin', 'seller'),
    allowNull: false,
    defaultValue: 'user',
  },
});

module.exports = User;

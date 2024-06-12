const { sequelize } = require("../config/db");
const { DataTypes } = require("sequelize");

const Product = sequelize.define("Product", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = { sequelize, Product };

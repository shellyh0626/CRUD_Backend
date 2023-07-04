const { DataTypes } = require("sequelize");
const db = require("../db");

const Campus = db.define("campus", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    defaultValue: "",
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    //DataTypes.TEXT provides unlimited length text column
    type: DataTypes.TEXT,
  },
});

module.exports = Campus;

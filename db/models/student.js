const { DataTypes } = require("sequelize");
const db = require("../db");

const Student = db.define("student", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  imageUrl: {
    type: DataTypes.STRING,
    defaultValue: "",
  },
  gpa: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    defaultValue: 0.0,
    validate: {
      min: 0.0,
      max: 4.0,
    },
  },
  campusId: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
});

module.exports = Student;

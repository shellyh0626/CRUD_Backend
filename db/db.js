const { Sequelize } = require("sequelize");
const {Pool} = require("pg");
require("dotenv").config();
// const { name } = require("../package.json");

//Passing a connection URI
//Refer to Sequelize documentation: Example for Postgres
//const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')
const db = new Sequelize(process.env.POSTGRES_URL + "?sslmode=require");

//Testing the connection to database
db.authenticate().then(() => {
  console.log("Connection has been established successfully.");
});

module.exports = db;

const { Sequelize } = require("sequelize");
// const { name } = require("../package.json");

//Passing a connection URI
//Refer to Sequelize documentation: Example for Postgres
//const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')
const db = new Sequelize(
  `postgres://postgres:postgres@localhost:5432/crud_backend`,
  { logging: false }
);

//Testing the connection to database
db.authenticate().then(() => {
  console.log("Connection has been established successfully.");
});

module.exports = db;

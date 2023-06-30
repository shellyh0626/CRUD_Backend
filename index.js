const express = require("express");
const db = require("./db");
const PORT = 8080;

const app = express();

const syncDB = () => db.sync();

const serverRun = () => {
  app.listen(PORT, () => {
    console.log(`Live on port: ${PORT}`);
  });
};

syncDB();
serverRun();

module.exports = app;

const express = require("express");
var cors = require("cors");

const db = require("./db");
const PORT = 8080;

const app = express();
app.use(cors());
app.use("/api", require("./api"));

const syncDB = () => db.sync();

const serverRun = () => {
  app.listen(PORT, () => {
    console.log(`Live on port: ${PORT}`);
  });
};

syncDB();
serverRun();

module.exports = app;

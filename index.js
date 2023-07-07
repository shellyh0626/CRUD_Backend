const express = require("express");
// require("dotenv").config();
var cors = require("cors");

const db = require("./db");
const PORT = 8080;

const app = express();
app.use(cors());
app.use(express.json());
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

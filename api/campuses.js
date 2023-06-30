const express = require("express");
const router = express.Router();

const { Campus } = require("../db/models");

// Root here is localhost:8080/api/campuses/
router.get("/", async (req, res, next) => {
  try {
    const allCampus = await Campus.findAll();
    allCampus
      ? res.status(200).json(allCampus)
      : res.status(404).send("Campus List Not Found");
  } catch (error) {
    next(error);
  }
});

module.exports = router;

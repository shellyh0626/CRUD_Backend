const express = require("express");
const router = express.Router();

const { Campus } = require("../db/models");

// Root here is localhost:8080/api/campuses/
router.get("/", async (req, res, next) => {
  try {
    const allCampuses = await Campus.findAll();
    allCampuses
      ? res.status(200).json(allCampuses)
      : res.status(404).send("Campus List Not Found");
  } catch (error) {
    next(error);
  }
});

// Root here is localhost:8080/api/campuses/
router.post("/", async (req, res, next) => {
  try {
    const newCampus = await Campus.create(req.body);
    newCampus
      ? res.status(201).json(newCampus)
      : res.status(404).send("Campus Not Created");
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.id);
    campus
      ? res.status(200).json(campus)
      : res.status(404).send("Campus Not Found");
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.id);
    campus
      ? await campus.update(req.body)
      : res.status(404).send("Campus Not Found");
    res.status(200).json(campus);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

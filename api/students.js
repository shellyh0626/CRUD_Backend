const express = require("express");
const router = express.Router();

const { Student } = require("../db/models");

// Root here is localhost:8080/api/students/
router.get("/", async (req, res, next) => {
  try {
    const allStudent = await Student.findAll();
    allStudent
      ? res.status(200).json(allStudent)
      : res.status(404).send("Student List Not Found");
  } catch (error) {
    next(error);
  }
});

module.exports = router;

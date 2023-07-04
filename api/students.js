const express = require("express");
const router = express.Router();

const { Student } = require("../db/models");

// Root here is localhost:8080/api/students/
router.get("/", async (req, res, next) => {
  try {
    const allStudents = await Student.findAll();
    allStudents
      ? res.status(200).json(allStudents)
      : res.status(404).send("Student List Not Found");
  } catch (error) {
    next(error);
  }
});

// Root here is localhost:8080/api/students/
router.post("/", async (req, res, next) => {
  try {
    const newStudent = await Student.create(req.body);
    newStudent
      ? res.status(201).json(newStudent)
      : res.status(404).send("Student Not Created");
  } catch (error) {
    next(error);
  }
});

module.exports = router;

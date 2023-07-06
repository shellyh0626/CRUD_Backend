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

router.get("/campus/:id", async (req, res, next) => {
  try {
    const students = await Student.findAll({
      where: {
        campusId: req.params.campusId,
      },
    });
    students
      ? res.status(200).json(students)
      : res.status(404).send("Students Not Found");
  } catch (error) {
    next(error);
  }
});

// Root here is localhost:8080/api/students/
router.post("/", async (req, res, next) => {
  try {
    req.body.campusId = parseInt(req.body.campusId);
    req.body.gpa = parseFloat(req.body.gpa);
    const newStudent = await Student.create(req.body);
    newStudent
      ? res.status(201).json(newStudent)
      : res.status(404).send("Student Not Created");
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.id);
    student
      ? res.status(200).json(student)
      : res.status(404).send("Student Not Found");
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.id);
    student
      ? await student.update(req.body)
      : res.status(404).send("Student Not Found");
    res.status(200).json(student);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.id);
    student
      ? await student.destroy()
      : res.status(404).send("Student Not Found");
    res.status(204).send("Student Deleted");
  } catch (error) {
    next(error);
  }
});

module.exports = router;

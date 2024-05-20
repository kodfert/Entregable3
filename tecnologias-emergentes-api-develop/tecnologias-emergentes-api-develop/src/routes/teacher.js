const express = require("express");
const router = express.Router();
const teacherSchema = require("../models/teacher");

// get
router.get("/teachers", async (_, res) => {
  try {
    const data = await teacherSchema.find();
    res.json(data);
  } catch (error) {
    res.json({ message: error });
  }
});

// create
router.post("/teachers", async (req, res) => {
  try {
    const createTeacher = req.body;
    const teacher = await teacherSchema(createTeacher);
    const data = await teacher.save();
    res.json(data);
  } catch (error) {
    res.json({ message: error });
  }
});

// getById
router.get("/teachers/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await teacherSchema.findById(id);
    res.json(data);
  } catch (error) {
    res.json({ message: error });
  }
});

// updateById
router.put("/teachers/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateTeacher = req.body;
    const data = await teacherSchema.updateOne(
      { _id: id },
      { $set: updateTeacher }
    );
    res.json(data);
  } catch (error) {
    res.json({ message: error });
  }
});

// deleteById
router.delete("/teachers/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await teacherSchema.findByIdAndDelete(id);
    res.json(data);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const studentSchema = require("../models/student");

// get
router.get("/students", async (_, res) => {
  try {
    const data = await studentSchema.find();
    res.json(data);
  } catch (error) {
    res.status(500).send('Error getting students"');
  }
});

// create
router.post("/students", async (req, res) => {
  try {
    const createStudent = req.body;
    const student = await studentSchema(createStudent);
    const data = await student.save();
    res.json(data);
  } catch (error) {
    res.status(500).send("Error creating a student");
  }
});

// getById
router.get("/students/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await studentSchema.findById(id);
    res.json(data);
  } catch (error) {
    res.status(500).send("Error getting a student");
  }
});

// updateById
router.put("/students/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateStudent = req.body;
    const data = await studentSchema.updateOne(
      { _id: id },
      { $set: updateStudent }
    );
    res.json(data);
  } catch (error) {
    res.status(500).send("Error editing a student");
  }
});

// deleteById
router.delete("/students/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await studentSchema.findByIdAndDelete(id);
    res.json(data);
  } catch (error) {
    res.status(500).send("Error deleting a student");
  }
});

module.exports = router;

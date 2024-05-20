const mongoose = require("mongoose");

const teacherSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: false,
  },
  gender: {
    type: String,
    required: false,
  },
  typeDocument: {
    type: String,
    required: true,
  },
  typeSubject: {
    type: String,
    required: true,
  },
  numberDocument: {
    type: String,
    required: true,
  },
  dateBirth: {
    type: String,
    required: false,
  },
  code: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Teacher", teacherSchema);

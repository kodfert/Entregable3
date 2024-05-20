require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const studentRouter = require("./routes/student");
const teacherRouter = require("./routes/teacher");

const app = express();

const PORT = process.env.PORT || 9000;
const URI = process.env.MONGODB_URI;

// middleware
app.use(express.json());

// cors
app.use(cors());

// routes
app.use("/api", studentRouter);
app.use("/api", teacherRouter);

// mongodb connection
mongoose
  .connect(URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.log("error MongoDB", error));

app.listen(PORT, () => {
  console.log("server listening on localhost", PORT);
});

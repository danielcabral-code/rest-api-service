const mongoose = require("mongoose");

const exercisesSchema = new mongoose.Schema({
  id: String,
  exerciseName: String,
  category: String,
  videoUrl: String,
  duration: Number,
});

const exercises = mongoose.model("tbl_exercises", exercisesSchema);

module.exports = exercises;

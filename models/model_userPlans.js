const mongoose = require("mongoose");

const planSchema = new mongoose.Schema({
  id: String,
  plan_name: String,
  user_id: String,
  exercises: [{ exercise_id: String, exercise_duration: Number }],
});

const plans = mongoose.model("tbl_user_plans", planSchema);

module.exports = plans;

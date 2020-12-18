const mongoose = require("mongoose");

const planSchema = new mongoose.Schema({
  id: String,
  plan_name: String,
  user_id:String,
  exercise_id:[String]
});

const plans = mongoose.model("tbl_plans", planSchema);

module.exports = plans;
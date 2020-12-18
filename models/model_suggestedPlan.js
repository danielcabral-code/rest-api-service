const mongoose = require("mongoose");

const suggestedSchema = new mongoose.Schema({
  id: String,
  user_id: String,
  default_plan_id: String,
});

const suggestedPlan = mongoose.model("tbl_suggested_plans", suggestedSchema);

module.exports = suggestedPlan;

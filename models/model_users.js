const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: String,
  name: String,
  email: String,
  password: String,
  height: Number,
  birth: Date,
  weight: Number,
  photoUrl: String,
});

const user = mongoose.model("tbl_users", userSchema);

module.exports = user;

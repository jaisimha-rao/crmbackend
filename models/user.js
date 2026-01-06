const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: { type: String },
  bgColor: { type: String, default: "#ffffff" },
  pincode: { type: String },
  city: { type: String },
  state: { type: String },
});

module.exports = mongoose.model("User", userSchema);

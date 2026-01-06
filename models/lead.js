const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  phone: { type: String },
  stage: { type: String, enum: ["Leads","Proposition","Won","Lost"], default: "Leads" },
  owner: { type: String },
  value: { type: Number, default: 0 },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Lead", leadSchema);

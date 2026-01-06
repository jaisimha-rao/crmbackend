const Lead = require("../models/lead");

// Get all leads
const getLeads = async (req, res) => {
  const leads = await Lead.find();
  res.json(leads);
};

// Add lead
const addLead = async (req, res) => {
  const newLead = new Lead(req.body);
  await newLead.save();
  res.status(201).json(newLead);
};

// Update lead
const updateLead = async (req, res) => {
  const lead = await Lead.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(lead);
};

// Delete lead
const deleteLead = async (req, res) => {
  await Lead.findByIdAndDelete(req.params.id);
  res.json({ message: "Lead deleted" });
};

module.exports = { getLeads, addLead, updateLead, deleteLead };

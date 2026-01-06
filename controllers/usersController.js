const User = require("../models/user");

const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

const addUser = async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).json(user);
};

const updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(user);
};

module.exports = { getUsers, addUser, updateUser };

const express = require("express");
const router = express.Router();
const { getUsers, addUser, updateUser } = require("../controllers/usersController");

router.get("/", getUsers);
router.post("/", addUser);
router.put("/:id", updateUser);

module.exports = router;

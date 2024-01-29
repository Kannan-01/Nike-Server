const express = require("express");
const router = new express.Router();
const userController = require("../Controllers/userController");

// for register user
router.post("/register", userController.registerController);
module.exports = router;

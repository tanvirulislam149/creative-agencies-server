const express = require("express");
const router = express.Router();
const userController = require("./user.controller")

router.post("/addUser", userController.addUser);
router.get("/users", userController.getUsers);

module.exports = router;
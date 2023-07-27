const express = require("express");
const router = express.Router();
const userController = require("./user.controller")

router.post("/addUser", userController.addUser);
router.get("/users", userController.getUsers);
router.patch("/makeAdmin", userController.makeAdmin)
router.get("/isAdmin", userController.isAdmin);

module.exports = router;
const express = require("express");
const router = express.Router();
const OrderController = require("./order.controller");

router.post("/addOrder", OrderController.addOrderController)

module.exports = router;
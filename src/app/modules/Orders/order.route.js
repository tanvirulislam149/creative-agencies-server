const express = require("express");
const router = express.Router();
const OrderController = require("./order.controller");

router.get("/addOrder", OrderController.addOrderController)

module.exports = router;
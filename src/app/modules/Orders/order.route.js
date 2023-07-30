const express = require("express");
const router = express.Router();
const OrderController = require("./order.controller");

router.post("/addOrder", OrderController.addOrderController)
router.get("/getMyCourses", OrderController.getMyOrdersController)
router.get("/getAllOrders", OrderController.getAllOrdersController)

module.exports = router;
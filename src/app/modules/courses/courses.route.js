const express = require("express");
const router = express.Router();

const coursesController = require("./courses.controller")

router.get("/courses", coursesController.getCoursesController);

module.exports = router;
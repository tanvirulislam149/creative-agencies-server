const express = require("express");
const router = express.Router();

const coursesController = require("./courses.controller")

router.get("/getCourses", coursesController.getCoursesController);
router.post("/addCourse", coursesController.addCourseController);

module.exports = router;
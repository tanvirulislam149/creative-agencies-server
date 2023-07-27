const Courses = require("./courses.model");

exports.getCoursesController = async (req, res, next) => {
  try {
    const result = await Courses.find({});
    res.send(result);
  } catch (error) {
    res.send(error.message);
  }
}
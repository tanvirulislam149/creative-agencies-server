const Courses = require("./courses.model");

exports.getCoursesController = async (req, res, next) => {
  try {
    const result = await Courses.find({});
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

exports.addCourseController = async (req, res, next) => {
  try {
    const result = await Courses.create(req.body);
    // console.log(data);
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

exports.getCourseNameController = async (req, res, next) => {
  try {
    const result = await Courses.find({}).select("title");
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}
const { default: mongoose } = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter title."],
    unique: [true, "Must be a unique title."]
  },
  description: {
    type: String,
    required: [true, "Please enter description."]
  },
  icon: {
    type: String,
    required: [true, "Please enter an image."]
  }
});


const Courses = mongoose.model('courses', courseSchema);

module.exports = Courses;
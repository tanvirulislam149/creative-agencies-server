const { default: mongoose } = require("mongoose");

const ReviewsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  reviewerImg: {
    type: String,
    required: true
  }
})

const Reviews = mongoose.model("reviews", ReviewsSchema);

module.exports = Reviews
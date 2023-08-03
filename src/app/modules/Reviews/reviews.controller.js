const Reviews = require("./reviews.model");

exports.addreviewController = async (req, res, next) => {
  try {
    const result = await Reviews.create(req.body);
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

exports.getReviewsController = async (req, res, next) => {
  try {
    const result = await Reviews.find({});
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}
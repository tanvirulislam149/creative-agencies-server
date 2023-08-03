const express = require("express");
const router = express.Router();
const reviewsController = require("./reviews.controller");

router.post("/addReview", reviewsController.addreviewController);
router.get("/getReviews", reviewsController.getReviewsController);


module.exports = router;
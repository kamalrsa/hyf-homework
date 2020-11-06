const express = require("express");
const router = express.Router();

const reviews = require("./../data/reviews.json");

router.get("/", async (request, response) => {
  response.send(reviews);
});
router.get("/:id", async (request, response) => {
  let reviewsCount = Object.keys(reviews).length;
  if (parseInt(reviewsCount) < parseInt(request.params.id)) {
    response.send("doesnot exists reservations");
  } else if (!isNaN(parseInt(request.params.id))) {
    const reviewsWithId = reviews.filter(
      (item) => item.id == parseInt(request.params.id)
    );
    return response.send(reviewsWithId[0]);
  } else {
    response
      .status(400)
      .send(
        `There is no reviews with ${request.params.id} use correct format `
      );
  }
});

module.exports = router;

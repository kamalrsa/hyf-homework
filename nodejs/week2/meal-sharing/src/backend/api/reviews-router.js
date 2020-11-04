const express = require("express");
const router = express.Router();

const reviews = require("./../data/reviews.json");

router.get("/", async (request, response) => {
  response.send(reviews);
});

module.exports = router;

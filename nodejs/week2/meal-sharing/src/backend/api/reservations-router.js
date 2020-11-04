const express = require("express");
const router = express.Router();

const reservations = require("./../data/reservations.json");

router.get("/", async (request, response) => {
  response.send(reservations);
});

module.exports = router;

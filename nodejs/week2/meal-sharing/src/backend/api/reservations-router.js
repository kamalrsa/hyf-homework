const express = require("express");
const router = express.Router();

const reservations = require("./../data/reservations.json");

router.get("/", async (request, response) => {
  response.send(reservations);
});
router.get("/:id", async (request, response) => {
  let reservationCount = Object.keys(reservations).length;
  if (parseInt(reservationCount) < parseInt(request.params.id)) {
    response.send("doesnot exists reservations");
  } else if (!isNaN(parseInt(request.params.id))) {
    const reservationWithid = reservations.filter(
      (item) => item.id == parseInt(request.params.id)
    );
    return response.send(reservationWithid[0]);
  } else {
    response
      .status(400)
      .send(
        `There is no reservation with ${request.params.id} use correct format `
      );
  }
});

module.exports = router;

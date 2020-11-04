const { response } = require("express");
const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");

router.get("/", async (request, response) => {
  response.send(meals);
});

router.get("/:id", async (request, response) => {
  const givenid = parseInt(request.params.id);
  const mealWithid = meals.filter((item) => item.id === givenid);
  response.send(mealWithid); //http://localhost:3000/meals/1
});

router.get("/", async (request, response) => {
  const CreatedAfter = req.query.createdAfter;
  const createdAfterMeal = meals.filter(
    (item) => item.createdAt > CreatedAfter
  );
  response.send(createdAfterMeal);
});

module.exports = router;

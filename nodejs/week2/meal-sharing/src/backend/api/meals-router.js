const { response, request } = require("express");
const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");

router.get("/", async (request, response) => {
  //Get meals that match a title
  if (request.query.title) {
    const titleResult = meals.filter((item) =>
      item.title.toLowerCase().includes(request.query.title.toLowerCase())
    );
    response.send(titleResult);
  } else if (request.query.maxPrice) {
    // Get meals tat has a price smaller than maxPrice
    if (!parseInt(request.query.maxPrice)) {
      return response
        .status(400)
        .send(`There is no meal with ${request.params.maxPrice} `);
    } else {
      const price = meals.filter(
        (item) => item.price < parseInt(request.query.maxPrice)
      );
      response.send(price);
    }
  } else if (request.query.createdAfter) {
    // Get meals that has been created after the date
    if (!parseInt(request.query.createdAfter)) {
      return response
        .status(400)
        .send(`There is no meal with ${request.params.maxPrice} `);
    } else {
      const createdAfter = new Date(request.query.createdAfter);
      const created = meals.filter(
        (item) => new Date(item.createdAt) > createdAfter
      );
      response.send(created);
    }
  } else if (request.query.limit) {
    //meal parameter- only specific no of meals
    if (!parseInt(request.query.limit)) {
      return response
        .status(400)
        .send(`There is no meal with ${request.params.maxPrice} `);
    } else {
      const limitMeal = meals.filter(
        (item) => meals.indexOf(item) < parseInt(request.query.limit)
      );
      response.send(limitMeal);
    }
  } else {
    response.send(meals);
  }
});

//response with te json for the meal with corresponding id.
router.get("/:id", async (request, response) => {
  const inputId = parseInt(request.params.id);
  if (!isNaN(inputId)) {
    const mealWithid = meals.filter((item) => item.id === inputId);
    response.send(mealWithid[0]);
  } else {
    return response
      .status(400)
      .send(`There is no meal with ${request.params.id} `);
  }
});

module.exports = router;

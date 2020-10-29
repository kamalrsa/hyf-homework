const express = require("express");
const app = express();

// import data here
const mealsArray = require("./data/meals");
const reviewsArray = require("./data/reviews");
const reservationArray = require("./data/reservations.json");

app.get("/", async (request, response) => {
  response.send("Meal Sharing Web App");
});

// meals
const mealsReviewsArray = mealsArray.map((mealitem) => {
  mealitem.reviews = reviewsArray.filter(
    (element) => mealitem.id === element.mealId
  );
  return mealitem;
});

app.get("/meals", async (request, response) => {
  response.send(mealsReviewsArray);
});

// cheap-meal
const cheapMealArray = mealsArray.filter((mealitem) => {
  if (mealitem.price <= 50) {
    mealitem.reviews = reviewsArray.filter(
      (element) => mealitem.id === element.mealId
    );
    return mealitem;
  } else {
    return `There is no cheap meal to show`;
  }
});
app.get("/cheap-meals", async (request, response) => {
  response.send(cheapMealArray);
});

// large-meals
const largeMealArray = mealsArray.filter((mealitem) => {
  if (mealitem.maxNumberOfGuests >= 5) {
    mealitem.reviews = reviewsArray.filter(
      (element) => mealitem.id === element.mealId
    );
    return mealitem;
  } else {
    return;
  }
});
app.get("/large-meals", async (request, response) => {
  response.send(largeMealArray);
});

//random meal
const length = mealsArray.length;
const randomNum = Math.floor(Math.random() * length);

const randomMealArray = mealsArray.map((mealitem) => {
  mealitem.reviews = reviewsArray.filter(
    (element) => mealitem.id === element.mealId
  );
  return mealitem;
});
app.get("/meal", async (request, response) => {
  response.send(randomMealArray[randomNum]);
});

//reservation

app.get("/reservations", async (request, response) => {
  response.send(reservationArray);
});

//reservation random
//const randomNumRes = Math.floor(Math.random() * reservationArray.length);
app.get("/reservation", async (request, response) => {
  response.send(reservationArray[randomNum]);
});

module.exports = app;

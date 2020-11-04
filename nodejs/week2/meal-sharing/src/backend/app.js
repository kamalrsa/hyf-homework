const express = require("express");
const app = express();

const mealsRouter = require("./api/meals-router");
const reviewsRouter = require("./api/reviews-router");
const reservationsRouter = require("./api/reservations-router");

// app.use binds middleware to your application. You can give app.use a path and router. The mini router will take care of all requests with the path
app.use("/meals", mealsRouter);

app.use("/reservations", reservationsRouter);
app.use("/reviews", reviewsRouter);

app.get("/", async (request, response) => {
  response.send("Meal sharing web app");
});

module.exports = app;

const express = require("express");
const app = express();

const mealsRouter = require("./api/meals-router");
const reviewsRouter = require("./api/reviews-router");
const reservationsRouter = require("./api/reservations-router");

// app.use binds middleware to your application. You can give app.use a path and router. The mini router will take care of all requests with the path
const middleware = (request, response, next) => {
  request.isChromeBrowser = request.headers["user-agent"].includes("chrome");
  //console.log(request.isChromeBrowser);
  console.log(request.headers);
  next();
};

app.use("/meals", [middleware, mealsRouter]);
app.use("/reservations", [middleware, reservationsRouter]);
app.use("/reviews", [middleware, reviewsRouter]);

app.get("/", async (request, response) => {
  response.send("Meal sharing web app");
});

module.exports = app;

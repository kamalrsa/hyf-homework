const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week2 homework"));

// GET /numbers/add?first=<number here>&second=<number here>. In response send sum (first + second).

app.get("/numbers/add", function (req, res) {
  response = {
    result: parseInt(req.query.first) + parseInt(req.query.second),
  };
  res.send(response);
});

// GET /numbers/multiply/<first number here>/<second number here>. in response send multiplication (first * second).

app.get("/numbers/multiply/:first/:second", function (req, res) {
  response = {
    result: parseInt(req.params.first) * parseInt(req.params.second),
  };
  res.send(response); //http://localhost:3000/numbers/multiply/5/6
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));

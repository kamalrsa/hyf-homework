const { response, request } = require("express");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get("/", (req, res) => res.send("nodejs week3 homework"));

// getting data through query parameters using GET
app.get("/calculator/:operator", (req, res) => {
  //const first = parseInt(req.query.first);
  //const second = parseInt(req.query.second);
  //const sum = first + second;
  //res.send(`The sum is ${sum}`);
  const givenNumber = Object.values(req.query);
  const allNumber = [].concat.apply([], givenNumber);
  //console.log(allNumber); //[ '1', '2', '5' ]
  const allNumberInt = allNumber.map(Number);
  //console.log(allNumberInt); //[ 1, 2, 5 ]
  if (req.params.operator === "add") {
    const addNumber = allNumberInt.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    res.send(`The sum is ${addNumber}`);
  } else if (req.params.operator === "mul") {
    const multiply = allNumberInt.reduce(
      (accumulator, currentValue) => accumulator * currentValue
    );
    res.send(`The multiplication is ${multiply}`);
  } else if (req.params.operator === "sub") {
    const subtraction = allNumberInt.reduce(
      (accumulator, currentValue) => accumulator - currentValue
    );
    res.send(`The Subtraction is ${subtraction}`);
  } else if (req.params.operator === "div") {
    const subtraction = allNumberInt.reduce(
      (accumulator, currentValue) => accumulator / currentValue
    );
    res.send(`The Division is ${subtraction}`);
  } else {
    res.send("The params should be a numbers");
  }
});

//getting data through the request body using post
app.post("/calculator/mul", (req, res) => {
  const givenNumber = Object.values(req.body);
  const allNumber = [].concat.apply([], givenNumber);
  console.log(allNumber); //[ '5', '2', '5' ]
  const allNumberInt = allNumber.map(Number);
  console.log(allNumberInt); //[ 5, 2, 5 ]
  const multiply = allNumberInt.reduce(
    (accumulator, currentValue) => accumulator * currentValue
  );
  res.send(`The multiplication is ${multiply}`);
});
app.post("/calculator/div", (req, res) => {
  const givenNumber = Object.values(req.body);
  const allNumber = [].concat.apply([], givenNumber);
  console.log(allNumber); //[ '5', '2', '5' ]
  const allNumberInt = allNumber.map(Number);
  console.log(allNumberInt); //[ 5, 2, 5 ]
  const division = allNumberInt.reduce(
    (accumulator, currentValue) => accumulator / currentValue
  );
  res.send(`The division is ${division}`);
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));

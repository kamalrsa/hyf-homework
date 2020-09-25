//translateOneByOne - Should translate the circles one at a time from their random start position to their target see the target positions below. Log something out after each element has been moved

function translateOneByOne() {
  moveElement(document.querySelector("li:nth-child(1)"), {
    x: 20,
    y: 300,
  }).then(() => {
    moveElement(document.querySelector("li:nth-child(2)"), {
      x: 400,
      y: 300,
    }).then(() => {
      moveElement(document.querySelector("li:nth-child(3)"), { x: 400, y: 20 });
    });
  });
}
translateOneByOne();

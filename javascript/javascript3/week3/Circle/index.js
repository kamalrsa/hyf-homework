let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }
  draw() {
    ctx.beginPath();

    ctx.fillStyle = this.fillColor;
    ctx.arc(
      this.x,
      this.y,
      this.r,
      this.startAngle,
      this.endAngle * Math.PI,
      this.fillColor
    );
    ctx.fill();
  }
}
const c1 = new Circle(100, 100, 50, 0, 2, "#0000000");
c1.draw();

//random circle
canvas.addEventListener("mousemove", (e) => {
  let r = Math.floor(Math.random() * 30);
  let x = Math.floor(window.innerWidth * Math.random());
  let y = Math.floor(window.innerHeight * Math.random());
  let randomColor =
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");
  const c2 = new Circle(x, y, r, 0, 2, randomColor);
  c2.draw();
});

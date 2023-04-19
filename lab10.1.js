function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("black");
  
  push();
  fill("grey")
  rect(0, 360, 400, 40);
  rect(0, 200, 400, 40);
  rect(0, 0, 400, 80);
  pop();
}

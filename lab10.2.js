let newCar = [];

let randomX = [0, 100, 200, 300, 400];
let arrayY = [320, 280, 240, 160, 120, 80];
let randomSpeed = [40, 80, 120]

function setup() {
  createCanvas(400, 400);
  
  for(let i = 0; i < 6; i++){
    newCar[i] = new Car(random(randomX), arrayY[i], random(randomSpeed), random(1, 5));
  }
}

function draw() {
  background("black");
  drawLanes();
  
  for (let i = 0; i < newCar.length; i++){
   newCar[i].move();
   newCar[i].show();
 }
  
}

function drawLanes(){
  push();
  fill("grey")
  rect(0, 360, 400, 40);
  rect(0, 200, 400, 40);
  rect(0, 0, 400, 80);
  pop();
}

class Car{
  constructor(x, y, length, speed){
    this.x = x;
    this.y = y;
    this.length = length
    this.speed = speed;
  }
  show(){
    push();
    translate(this.x, this.y)
    fill("white");
    rect(0, 0, this.length, 40);
    pop();
  }
  move(){
    this.x = this.x + this.speed
    
    if (this.x < 0 || this.x > width ) {
      this.speed = -this.speed
    }
  }  
}

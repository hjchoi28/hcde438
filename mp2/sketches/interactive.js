let r,g,b,c;
let x,y,spd;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200, 243, 205);
}

function draw() {
  r = random(0);
  g = random(200);
  b = random(250);
  c = color(r, g, b);
  spd = abs(mouseX - pmouseX) + abs(mouseY - pmouseY);

  noFill();
  stroke(c);
  strokeWeight(spd/2);

  circle(mouseX, mouseY, 100);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
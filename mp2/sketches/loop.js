let r,g,b,c;
let x,y,xd,yd;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = windowWidth/2;
  y = windowHeight/2;
  xd = 1;
  yd = 1;
}

function draw() {
  background(253, 253, 150);
  r = random(250);
  g = random(0);
  b = random(500);
  c = color(r, g, b);

  noFill();
  stroke(c);
  strokeWeight(20);

  if (x > windowWidth - 100 || x < 100) {
    xd = xd * -1;
  }
  if (y > windowHeight - 100 || y < 100) {
    yd = yd * -1;
  }
  x = x + (5*xd);
  y = y - (2*yd);

  circle(x, y, 100);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
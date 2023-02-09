let r,g,b, circleSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  r = random(253);
  g = random(253);
  b = random(150);
  circleSize = random(50);
}

function draw() {
  background(253, 253, 150);

  var x = 0;
  var d = 10;

  while(x < windowWidth + d) {
    let c = color(r, g, b);

    if (x % 2 == 1) {
      fill(c);
      noStroke();
    } else {
      noFill();
      stroke(c);
      strokeWeight(d/10);
    }

    circle(x, windowHeight/2, circleSize);
    x = x + (circleSize + 10/2);
    d = d + 10;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
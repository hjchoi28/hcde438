function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(253, 253, 150);

  var x = 0;
  var d = 10;

  while(x < windowWidth + d) {
    let c = color(177, 156, 217);

    if (x % 2 == 1) {
      fill(c);
      noStroke();
    } else {
      noFill();
      stroke(c);
      strokeWeight(d/10);
    }

    circle(x, windowHeight/2, d);
    x = x + (d + 10/2);
    d = d + 10;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
let osc,c,b,am,fm;

function setup() {
  createCanvas(windowWidth, windowHeight);
  b = color(251, 180, 116)
  background(b);
  c = color(116, 187, 251)
  osc = new p5.Oscillator();
  osc.freq(200);
  osc.amp(0.5);
}
function draw() {
  background(b);
  fm = map(mouseX, 0, windowWidth, 200, 1000);
  osc.freq(fm);
  am = map(mouseY, 0, windowHeight, 0.1, 1);
  osc.amp(am);

  fill(c);
  noStroke();
  ellipse(mouseX, mouseY, mouseX/2, mouseY/2);
}

function mousePressed() {
  if (osc.started) {
    osc.stop();
    c = color(116, 187, 251);
    b = color(251, 180, 116);
  } else {
    osc.start();
    b = color(116, 187, 251);
    c = color(251, 180, 116);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
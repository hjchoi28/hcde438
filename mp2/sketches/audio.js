let song, c;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(245, 255, 250);
  song = loadSound("birthday.mp3");
  c = color(169, 211, 158);
}

function draw() {
  fill(c);
  textSize(windowWidth/20);
  textAlign(CENTER);
  textFont("Georgia");
  text("Happy Birthday!", windowWidth/2, windowHeight/2);
}

function mousePressed() {
  if (song.isPlaying()) {
    song.stop();
    c = color(169, 211, 158);
    background(245, 255, 250);
  }
  else {
    song.play();
    c = color(200, 158, 211);
    background(255, 250, 205);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
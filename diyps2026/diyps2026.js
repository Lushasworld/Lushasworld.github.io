let initials = 'ld';
let choice = '1';
let lastscreenshot = 61;
let currentColor;
let bgImg;

function preload() {
  bgImg = loadImage('images/backgroundextra.png');
}

function setup() {
  createCanvas(600, 600);
  image(bgImg, 0, 0, width, height);
  currentColor = color(255, 0, 0);
}

function draw() {
  // UI panel
  fill(240);
  noStroke();
  rect(0, 0, 160, 35);

  fill(0);
  textSize(16);
  text("Tool: " + choice, 10, 22);

  // Drawing tool
  if (mouseIsPressed) {
    noStroke();
    fill(currentColor);
    ellipse(mouseX, mouseY, 40, 40);
  }
}

function keyPressed() {
  if (key == '1') {
    choice = '1';
    currentColor = color(255, 0, 0);
  } else if (key == '2') {
    choice = '2';
    currentColor = color(128, 0, 255);
  } else if (key == '3') {
    choice = '3';
    currentColor = color(255, 255, 0);
  } else if (key == '4') {
    choice = '4';
    currentColor = color(0, 0, 0);
  } else if (key == '5') {
    choice = '5';
    currentColor = color(0, 255, 255);
  } else if (key == '6') {
    choice = '6';
    currentColor = color(0, 0, 255);
  } else if (key == '7') {
    choice = '7';
    currentColor = color(0, 255, 0);
  } else if (key == '8') {
    choice = '8';
    currentColor = color(255, 165, 0);
  } else if (key == '9') {
    choice = '9';
    currentColor = color(255, 105, 180);
  } else if (key == '0') {
    choice = '0';
    currentColor = color(255);
  } else if (key == 'x' || key == 'X') {
    image(bgImg, 0, 0, width, height);
  } else if (key == 'p' || key == 'P') {
    saveCanvas(initials + day() + hour() + minute() + second(), 'jpg');
  }
  else if (key == 'c' || key == 'C') {
  background(255, 0, 0); // clean canvas
}

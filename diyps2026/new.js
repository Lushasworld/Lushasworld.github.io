let initials = 'ld';
let choice = '1';
let lastscreenshot = 61;
let currentColor;

function setup() {
  createCanvas(600, 600);
  background(245);
  currentColor = color(255, 0, 0); // start red
}

function draw() {
  fill(240);
  noStroke();
  rect(0, 0, 160, 35);

  fill(0);
  textSize(16);
  text("Tool: " + choice, 10, 22);

  if (mouseIsPressed) {
    noStroke();
    fill(currentColor);
    ellipse(mouseX, mouseY, 40, 40);
  }
}

function keyPressed() {
  if (key == '1') {
    choice = '1';
    currentColor = color(255, 0, 0); // red

  } else if (key == '2') {
    choice = '2';
    currentColor = color(128, 0, 255); // purple

  } else if (key == '3') {
    choice = '3';
    currentColor = color(255, 255, 0); // yellow

  } else if (key == '4') {
    choice = '4';
    currentColor = color(0, 0, 0); // black

  } else if (key == '5') {
    choice = '5';
    currentColor = color(0, 255, 255); // cyan

  } else if (key == '6') {
    choice = '6';
    currentColor = color(0, 0, 255); // blue

  } else if (key == '7') {
    choice = '7';
    currentColor = color(0, 255, 0); // green

  } else if (key == '8') {
    choice = '8';
    currentColor = color(255, 165, 0); // orange

  } else if (key == '9') {
    choice = '9';
    currentColor = color(255, 105, 180); // pink

  } else if (key == '0') {
    choice = '0';
    currentColor = color(255); // white

  } else if (key == 'x' || key == 'X') {
    background(245);

  } else if (key == 'p' || key == 'P') {
    saveme();
  }
}

function mousePressed() {
  // forces canvas focus
  window.focus();
}

function saveme() {
  let filename = initials + day() + hour() + minute() + second();
  if (second() != lastscreenshot) {
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot = second();
}
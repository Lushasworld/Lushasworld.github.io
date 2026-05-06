console.log("JS cargó");
let initials = 'ld';
let choice = '1';
let currentColor;
let bgImg;

function preload() {
  bgImg = loadImage('diyps2026/extra.png');
}

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  fill(255, 0, 0);
  circle(mouseX, mouseY, 20);
}

  // UI
  fill(255);
  rect(0, 0, 120, 30);

  fill(0);
  text("Tool: " + choice, 10, 20);
}

function keyPressed() {
  if (key == '1') currentColor = color(255, 0, 0);
  else if (key == '2') currentColor = color(128, 0, 255);
  else if (key == '3') currentColor = color(255, 255, 0);
  else if (key == '4') currentColor = color(0);
  else if (key == '5') currentColor = color(0, 255, 255);
  else if (key == '6') currentColor = color(0, 0, 255);
  else if (key == '7') currentColor = color(0, 255, 0);
  else if (key == '8') currentColor = color(255, 165, 0);
  else if (key == '9') currentColor = color(255, 105, 180);
  else if (key == '0') currentColor = color(255);

  else if (key == 'c' || key == 'C') {
    clear();
  }

  else if (key == 'p' || key == 'P') {
    saveCanvas(initials + day() + hour() + minute() + second(), 'jpg');
  }
}

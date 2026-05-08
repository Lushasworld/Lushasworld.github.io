let initials = 'ld';
let currentColor;
let brushSize = 10;
let bgImg;

function preload() {
  bgImg = loadImage('extra.png');
}

function setup() {
  createCanvas(600, 600);
  currentColor = color(255);

  drawBackground();
}

function draw() {

  // coloring when press mouse
  if (mouseIsPressed) {
    fill(currentColor);
    noStroke();
    circle(mouseX, mouseY, brushSize);
  }

  // UI
  fill(255);
  rect(0, 0, 120, 30);

  fill(0);
  text("Tool", 10, 20);
}

// función para mostrar el background
function drawBackground() {
  clear();
  image(bgImg, 0, 0, width, height);
}

function keyPressed() {

  if (key == '+') brushSize += 2;
  if (key == '-') brushSize -= 2;

  brushSize = constrain(brushSize, 1, 50);

  if (key == '1') currentColor = color(128, 0, 255);
  else if (key == '2') currentColor = color(255, 0, 0);
  else if (key == '3') currentColor = color(255, 255, 0);
  else if (key == '4') currentColor = color(0);
  else if (key == '5') currentColor = color(0, 255, 255);
  else if (key == '6') currentColor = color(0, 0, 255);
  else if (key == '7') currentColor = color(0, 255, 0);
  else if (key == '8') currentColor = color(255, 165, 0);
  else if (key == '9') currentColor = color(255, 105, 180);
  else if (key == '0') currentColor = color(255);

  // limpiar y restaurar imagen
  else if (key == 'c' || key == 'C') {
    drawBackground();
  }

  else if (key == 'p' || key == 'P') {
    saveCanvas(initials + day() + hour() + minute() + second(), 'jpg');
  }
}

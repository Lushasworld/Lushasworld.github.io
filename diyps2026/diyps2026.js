var img;
var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var img9;
var img0;

var initials = 'ld';
var choice = '1';
var screenbg;
var lastscreenshot = 61;

function preload() {
  // Working images ONLY (no broken links)
  screenbg = loadImage('https://lushasworld.github.io/images/backgroundextra.png');
  img = loadImage('https://lushasworld.github.io/images/redline1.png');
  img1 = loadImage('https://lushasworld.github.io/images/redline1.png');
  img2 = loadImage('https://lushasworld.github.io/images/purpeline2.png');

  // TEMP copies so nothing breaks
  img3 = loadImage('https://lushasworld.github.io/images/redline1.png');
  img4 = loadImage('https://lushasworld.github.io/images/redline1.png');
  img5 = loadImage('https://lushasworld.github.io/images/redline1.png');
  img6 = loadImage('https://lushasworld.github.io/images/redline1.png');
  img7 = loadImage('https://lushasworld.github.io/images/redline1.png');
  img8 = loadImage('https://lushasworld.github.io/images/redline1.png');
  img9 = loadImage('https://lushasworld.github.io/images/redline1.png');
  img0 = loadImage('https://lushasworld.github.io/images/redline1.png');
}

function setup() {
  createCanvas(600, 600);
  image(screenbg, 0, 0, width, height);
}

function draw() {
  if (keyIsPressed) {
    choice = key;
    clear_print();
  }

  if (mouseIsPressed) {
    newkeyChoice(choice);
  }
}

function newkeyChoice(toolChoice) {

  if (toolChoice == '1') {
    image(img1, mouseX - 100, mouseY - 50, 200, 100);

  } else if (toolChoice == '2') {
    image(img2, mouseX - 100, mouseY - 50, 200, 100);

  } else if (toolChoice == '3') {
    image(img3, mouseX - 100, mouseY - 50, 200, 100);

  } else if (toolChoice == '4') {
    image(img4, mouseX - 100, mouseY - 50, 200, 100);

  } else if (toolChoice == '5') {
    image(img5, mouseX - 100, mouseY - 50, 200, 100);

  } else if (toolChoice == '6') {
    image(img6, mouseX - 100, mouseY - 50, 200, 100);

  } else if (toolChoice == '7') {
    image(img7, mouseX - 100, mouseY - 50, 200, 100);

  } else if (toolChoice == '8') {
    image(img8, mouseX - 100, mouseY - 50, 200, 100);

  } else if (toolChoice == '9') {
    image(img9, mouseX - 100, mouseY - 50, 200, 100);

  } else if (toolChoice == '0') {
    image(img0, mouseX - 100, mouseY - 50, 200, 100);

  } else if (toolChoice == 'g' || toolChoice == 'G') {
    image(img, mouseX - 50, mouseY - 50, 50, 50);

  } else if (toolChoice == 'j' || toolChoice == 'J') {
    image(img2, mouseX - 60, mouseY - 60, 60, 60);
  }
}

function clear_print() {
  if (key == 'x' || key == 'X') {
    image(screenbg, 0, 0, width, height);
  } else if (key == 'p' || key == 'P') {
    saveme();
  }
}

function saveme() {
  let filename = initials + day() + hour() + minute() + second();
  if (second() != lastscreenshot) {
    saveCanvas(filename, 'jpg');
    key = "";
  }
  lastscreenshot = second();
}

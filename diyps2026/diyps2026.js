var img;
var img, 
var img2, 
var img3, 
var img4, 
var img5, 
var img6, 
var img7, 
var img8, 
var img9, 
var img0;

var initials ='ld'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

var brushSize = 0;

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  screenbg = loadImage('https://lushasworld.github.io/images/extra.png');
  img = loadImage('https://lushasworld.github.io/images/heels.png');
  img2 = loadImage('https://lushasworld.github.io/images/extra.png');
  img3 = loadImage('https://ironferris.github.io/images/heels.png');
  img4 = loadImage('https://ironferris.github.io/images/heels.png');
  img5 = loadImage('https://ironferris.github.io/images/heels.png');
  img6 = loadImage('https://ironferris.github.io/images/heels.png');
  img7 = loadImage('https://ironferris.github.io/images/heels.png');
  img8 = loadImage('https://ironferris.github.io/images/heels.png');
  img9 = loadImage('https://ironferris.github.io/images/heels.png');
  img0 = loadImage('https://ironferris.github.io/images/heels.png');
}

function setup() {
createCanvas(600, 600);  // canvas size
background(screenbg);   // use our background screen color

} 

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
    if (key === '[') {
    brushSize = brushSize + 1;
    }
    
    if (key === ']') {
    brushSize = brushSize - 1;
    }check to see if it is clear screen or save image

  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) { // g places the image we pre-loaded
    image(img, mouseX-25-(brushSize/2), mouseY-25-(brushSize/2), 50 + brushSize, 50 + brushSize);
    strokeWeight(01);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '2') { // second tool
    strokeWeight(30);
    line(mouseX, mouseY, pmouseX, pmouseY);
    strokeWeight(1);
  
} else if (toolChoice == '3') { // third tool
    strokeWeight(30);
    stroke(68, 159, 227);
    line(mouseX, mouseY, pmouseX, pmouseY);
     strokeWeight(1);
    stroke('black')
  
} else if (toolChoice == '4') {
    stroke(0, 0, 255);
    line(mouseX, mouseY, pmouseX, pmouseY);
  
} else if (key == '5') { // this tool calls a function
    stroke(0, 0, 255);
    testbox(20, 20, 200);
    testbox(200, 20, 20);
    
 // make testbox do something!
 //   line(mouseX, mouseY, pmouseX, pmouseY);
  
} else if (toolChoice == '6') {
    stroke(200);
    line(mouseX, mouseY, pmouseX, pmouseY);
  
} else if (toolChoice == '7') {
    fill(100, 200, 100);
    rect(mouseX, mouseY, 20, 20);

} else if (toolChoice == '8') {
    fill(300, 100, 0, 80);
    rect(mouseX, mouseY, 20, 20);
 
} else if (toolChoice == '9') {
    fill(300, 100, 0, 80);
    rect(mouseX, mouseY, 40, 40);

} else if (toolChoice == '0') {
    stroke(0, 0);
    fill(random(255), random(255), random(255), random(255));
    rect(mouseX, mouseY, 200, 150);

} else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    image(img, mouseX 50, mouseY, 50);
    
  }else if (toolChoice == 'j' || toolChoice == 'J') { // g places the image we pre-loaded
    image(img2, mouseX 60, mouseY, 60);
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}

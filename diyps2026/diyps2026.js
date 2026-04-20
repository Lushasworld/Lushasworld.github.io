var img1; 
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


function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  screenbg = loadImage('https://lushasworld.github.io/images/extra.png');
  img1= loadImage('https://lushasworld.github.io/images/redline1.png');
  img2 = loadImage('https://lushasworld.github.io/images/purpeline2.png');
  img3 = loadImage('https://ironferris.github.io/images/yellowline3.png');
  img4 = loadImage('https://ironferris.github.io/images/blackline4.png');
  img5 = loadImage('https://ironferris.github.io/images/cyanline5.png');
  img6 = loadImage('https://ironferris.github.io/images/blueline6.png');
  img7 = loadImage('https://ironferris.github.io/images/greenline7.png');
  img8 = loadImage('https://ironferris.github.io/images/orangeline8.png');
  img9 = loadImage('https://ironferris.github.io/images/pinkline9.png');
  img0 = loadImage('https://ironferris.github.io/images/witheline0.png');
}

function setup() {
createCanvas(600, 600);  // canvas size
background(extra);   // use our background screen color

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
    image(img1, mouseX-100, mouseY-50, 200, 100);
    
  } else if (toolChoice == '2') { // second tool
    image(img2, mouseX-100, mouseY-50, 200, 100);
  
} else if (toolChoice == '3') { // third tool
    image(img3, mouseX-100, mouseY-50, 200, 100);
  
} else if (toolChoice == '4') {
    image(img4, mouseX-100, mouseY-50, 200, 100);
  
} else if (key == '5') { // this tool calls a function
    image(img5, mouseX-100, mouseY-50, 200, 100);
    
 // make testbox do something!
 //   line(mouseX, mouseY, pmouseX, pmouseY);
  
} else if (toolChoice == '6') {
    image(img6, mouseX-100, mouseY-50, 200, 100);
  
} else if (toolChoice == '7') {
    image(img7, mouseX-100, mouseY-50, 200, 100);

} else if (toolChoice == '8') {
    image(img8, mouseX-100, mouseY-50, 200, 100);
 
} else if (toolChoice == '9') {
    image(img9 , mouseX-100, mouseY-50, 200, 100);
    
} else if (toolChoice == '0') {
    image(img0, mouseX-100, mouseY-50, 200, 100);

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

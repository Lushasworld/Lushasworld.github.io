var ballx = 300;
var bally = 300;
var ballSize = 80;
var score =0;
var gameState = "L1";


var img;
var img2;
var img3;
var img4;
var img5;
var winGif;

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('200.jpg');  // 200.jpg needs to be next to this .js file
// you can link to an image on your github account
   img = loadImage('https://lushasworld.github.io/gamepics/200.jpg');
   img2 = loadImage('https://lushasworld.github.io/gamepics/202.jpg');
   img3 = loadImage('https://lushasworld.github.io/gamepics/203.jpg');
   img4 = loadImage('https://lushasworld.github.io/gamepics/redcarpet.png');
   img5 = loadImage('https://lushasworld.github.io/gamepics/redcarpet2.png');
   winGif = loadImage('https://lushasworld.github.io/game/congrats.gif');
}

function setup() {
 createCanvas(800,600); 
 textAlign(CENTER);
 textSize(20);
 
} // end setup

function draw() {
  
background(220); 
if (gameState === "L1") { 
levelOne();
} else if (gameState === "L2") {
  levelTwo();
} else if (gameState === "L3") {
  levelThree();
} else if (gameState === "win") {
    levelWin();
}

text(("Score: " + score), width/2, 40);
} // end draw

function levelOne(){
  background(img3);
text("level 1", width/2, height-20);
var distToBall = dist(ballx, bally, mouseX, mouseY);

if (distToBall<ballSize/2){
ballx = random(width);
bally = random(height);
score = score +1;
}  //if distToBall

if(score>=5) { 
  gameState ="L2";
}

// ellipse(ballx, bally, ballSize, ballSize);
image(img, ballx, bally, ballSize, ballSize);
 line(ballx + ballSize/2, bally + ballSize/2, mouseX, mouseY); 
  
  
} // end level one


function levelTwo(){
  background(img3);
text("level 2", width/2, height-20);
var distToBall = dist(ballx, bally, mouseX, mouseY);

if (distToBall<ballSize/2){
ballx = random(width);
bally = random(height);
score = score +1;
} //if distToBall

if(score>=10) {
 gameState ="L3";
}

image(img2, ballx, bally, ballSize, ballSize);
// ellipse(ballx, bally, ballSize, ballSize);
// line(ballx, bally, mouseX, mouseY); 


} // end level two


function levelThree(){
  background(img2); 
text("level 3", width/2, height-20);
var distToBall = dist(ballx, bally, mouseX, mouseY);

if (distToBall<ballSize/2){
ballx = random(width);
bally = random(height);
score = score +1;
ballSize= max(10, ballSize -1);
}

if (score > 19) {
    gameState = "win";
  }

function levelWin() {
  image(winGif, 0, 0, width, height);
} //if distToBall

// if(score>=10) {
// background(random(255));
// }

 ellipse(ballx, bally, ballSize, ballSize);

// line(ballx, bally, mouseX, mouseY); 

} // end level Three

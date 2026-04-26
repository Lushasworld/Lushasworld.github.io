var ballx = 300;
var bally = 300;
var ballSize = 40;
var score =0;
var gameState = "L1";
var img;
var img2;

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('200.webp');  // 200.webp needs to be next to this .js file
// you can link to an image on your github account
   img = loadImage('https://lushasworld.github.io/gamepics/200.webp');
   img2 = loadImage('https://lushasworld.github.io/gamepics/201.webp');
}

function setup() {
 createCanvas(600,600); 
 textAlign(CENTER);
 textSize(20);
 
} // end setup

function draw() {
  
background(220); 
if (gameState == "L1"){
 
level0ne();
}
if (gameState == "L2"){
  levelTwo();
}
if (gameState == "L3"){
  levelThree();
}

text(("Score: " + score), width/2, 40);
} // end draw

function level0ne(){
  
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
line(ballx = ballSize/2, bally = ballSize/2, mouseX, mouseY);
image(img, ballx, bally, ballSize, ballSize);
  
  
  
} // end level one


function levelTwo(){
  
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
  
text("level 3", width/2, height-20);
var distToBall = dist(ballx, bally, mouseX, mouseY);

if (distToBall<ballSize/2){
ballx = random(width);
bally = random(height);
score = score +1;
ballSize= ballSize -1;
} //if distToBall

// if(score>=10) {
// background(random(255));
// }

ellipse(ballx, bally, ballSize,
ballSize);
// line(ballx, bally, mouseX, mouseY); 

} // end level Three

function setup() {
createCanvas(600, 600);
background(220);
}
function draw() {

  // Percentage RGBA notation.
  background('rgba(100%, 0%, 100%, 0.5)');
  
  // Hair (black, shoulder length)
fill(0);

// top hair
ellipse(300, 260, 340, 260);
// left side hair
rect(150, 230, 80, 270); 
// right side hair
rect(370, 230, 80, 270);
//rounded bottom hair
ellipse(300, 425, 230, 90);

//face after
fill (210, 180, 140); // tan skin
ellipse(300, 300, 300, 400);

fill(0);
arc(300, 173, 320, 140, PI, TWO_PI, CHORD);


  describe('A canvas with a transparent purple background.');
//eyes
stroke(0);
strokeWeight(1);

// Top-left.
 
   //left eye big circle--
fill(255);
 ellipse(235, 230, 60, 50); 
 
 // Top-left.
 
  //left eye middle circle--
 fill(150);
ellipse(235, 230, 25, 25); 
fill(0)
ellipse(235, 230, 10, 10);
 
 // Top-right.
  

  // Top-right.

fill(255);
  ellipse(370, 230, 60, 50); 
  
  //Rigth eye middle circle--
  fill(150); 
 ellipse(370, 230, 25, 25); 
 fill(0);
 ellipse(370, 230, 10, 10);
 
 // nose
 fill(190, 150, 120);
 noStroke();
 triangle(300, 285, 290, 315, 310, 315);
 
// Ceja izquierda con bezier
bezier(140, 150, 150, 140, 170, 140, 180, 150);

// Mouth (smile with teeth)
  fill(225); // white teeth
  stroke (0);
  strokeWeight(2);
  arc(300, 340, 120, 80, 0, PI, CHORD);
  
  // Teeth divider
  line (260, 340, 340, 340);
  
  // outer mouth
  arc(300, 340, 120, 80, 0, PI);
  
  // lips outline
  noFill();
  stroke(150, 0, 0);
  strokeWeight(3);
  arc(300, 340, 120, 80, 0, PI);
  

if (mouseIsPressed) {
  
fill(50);

} else {
fill(255);
}
ellipse(mouseX, mouseY, 30, 30);
}

var img;
var whichImage = 0;
var smallPoint, largePoint;
 
function preload() {
    img = [loadImage("images/nyc5.jpg")];
}
 
function setup() {
    createCanvas(1080,720);
    smallPoint = 2;
    largePoint = 1000;
    imageMode(CENTER);
    noStroke();
    background(255);
    // pickImage();
    img[whichImage].loadPixels();
}
 
 
function draw() {
    //if (mouseIsPressed)
    drawAllDots(100);
}
 
/*function pickImage() {
    // background(255)
    img[whichImage].loadPixels();
    img[whichImage].updatePixels();
} */
 
function drawAllDots(numDots) {
    for (var i = 0; i < numDots; i++) {
        drawSingleDot();
    }
}
 
function drawSingleDot() {
    
    //if (mouseIsPressed){
    ellipse(60, 60);
    frameRate(60);
    var pointillize = map(random(50), 10, width, smallPoint, largePoint);
    var x = floor(random(img[whichImage].width));
    var y = floor(random(img[whichImage].height));
    var pix = img[whichImage].get(x, y);
    //noFill();
    //strokeWeight(3);
    //stroke(pix, 128);
    fill(pix, 128);
    ellipse(x, y, pointillize, pointillize);
   // }
      
}



function keyPressed() {
  if (keyCode === ENTER) {
   saveFrames();
  } 
   
}
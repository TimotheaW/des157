// p5 file

console.log("this is my script.js comment");

function setup() {
  var myCanvas = createCanvas(800, 250);
  //has to parent to an id
  myCanvas.parent('mySketch');
  // colorMode(HEX);
  background('#FFFFFF');
}

function draw() {
  stroke ('#FFBEC0');
  strokeWeight(1);
  noFill();
  ellipseMode (CENTER);
  ellipse(width/2,height/2, 80,80);

  strokeWeight (1);
  rectMode(CENTER);
  rect(width/2,height/2,150,150);
  rect(width/2,height/2,120,120);

  line (600,0,-400,600);

  strokeWeight (0.5);
  stroke ('#FDD0D2');
  rect(mouseX, mouseY, 85,85);
}

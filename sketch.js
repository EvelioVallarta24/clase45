var oceanbg;
var ocean;

function preload(){
  oceanbg = loadImage("images/mar.jpeg");
}

function setup(){
  createCanvas(400,400);
  ocean = createSprite(200,200);
  ocean.addImage("bg",oceanbg);
  ocean.velocityY = +3;
}

function draw() {
  background(51);

  drawSprites();
}


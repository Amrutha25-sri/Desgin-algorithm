var moving,fixed;

function setup() {
  createCanvas(800,400);
  moving = createSprite(400,200,50,70);
  fixed = createSprite(300,200,100,70);
}

function draw() {
  background(255,255,255);  
  moving.x = World.mouseX;
  moving.y = World.mouseY;
  if (moving.x-fixed.x < moving.width/2 + fixed.width/2 && 
    fixed.x - moving.x < fixed.width/2 + moving.width/2 && 
    moving.y-fixed.y < moving.height/2 + fixed.height/2 && 
    fixed.y - moving.y < fixed.height/2 + moving.height/2){
moving.shapeColor = "yellow";
fixed.shapeColor = "blue";
  }
  else {
    moving.shapeColor = "green";
    fixed.shapeColor = "green";
  }
  console.log(moving.x-fixed.x);
  drawSprites();
}
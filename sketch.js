var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  box1 = createSprite(400,300,80,30);
  box1.shapeColor = "purple";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(collision(movingRect,box1))
  {
    movingRect.shapeColor = "red";
    box1.shapeColor = "red"; 
  }

  else
  {
    movingRect.shapeColor = "green";
    box1.shapeColor = "purple"; 
  }
  
  drawSprites();
}


  

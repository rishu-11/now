var fixedRect, movingRect;
var object1, object2, object3, object4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  object1 = createSprite(100,100,50,50);
  object1.shapeColor = "pink";
  object2 = createSprite(200,100,50,50);
  object2.shapeColor = "pink";
  object3 = createSprite(300,100,50,50);
  object3.shapeColor = "pink";
  object4 = createSprite(400,100,50,50);
  object4.shapeColor = "pink";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,object1)){
    movingRect.shapeColor = "yellow";
    object1.shapeColor = "yellow";
  }
  else {
    movingRect.shapeColor = "green";
    object1.shapeColor = "green";
  }

  
  drawSprites();
}


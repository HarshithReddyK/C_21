var fixedRect, movingRect;
var car,wall,result
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

   car = createSprite(300, 100, 20, 30);
   car.shapeColor = "yellow";
   car.velocityX = -3;
    wall = createSprite(100, 100, 20, 80);
   wall.shapeColor = "yellow";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  result = isTouching(car,wall);

  if (result === true) {
    car.shapeColor = "blue";
    wall.shapeColor = "blue"; 
    car.velocityX = 0; 
  }else{

    car.shapeColor = "yellow";
    wall.shapeColor = "yellow"; 
  }
  
  drawSprites();
}

function isTouching(a,b) { 
  if (a.x - b.x < b.width/2 + a.width/2 
    && b.x - a.x < b.width/2 + a.width/2 
    && a.y - b.y < b.height/2 + a.height/2 
    && b.y - a.y < b.height/2 + a.height/2) 
    { //movingRect.shapeColor = "red";
       //fixedRect.shapeColor = "red";
        return true; // YES 
    } else { // movingRect.shapeColor = "green";
       // fixedRect.shapeColor = "green";
        return false; // NO 
      } 
      }
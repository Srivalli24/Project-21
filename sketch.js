var bullet, wall;
var speed, weight, thickness;


function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  
  bullet = createSprite(50, 200, 20, 200);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;

  wall = createSprite (1200,200,thickness,height/2);
  wall.shapeColor = (80,80,80);

  
  
}

function draw() {
  background(135,234,223);
  
  hasCollided();
  drawSprites();
}

function hasCollided () {
  if (wall.x - bullet.x < (bullet.width + wall.width)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if (damage>10) {
      bullet.shapeColor = color(228,0,0);
    }

    if (damage<10){
      bullet.shapeColor = color(0,225,0);
    }
  } 
}
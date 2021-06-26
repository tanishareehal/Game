var Play = 0;
var Pause = 1;
var End = 2;
var bg

var money=0;

var pc, npc1, npc2, npc3, npc4;
var ground, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5;
var obstacle6,obstacle7,obstacle8,obstacle9,obstacle10,obstacle11;
var obstacle12,obstacle13,obstacle14,obstacle15,obstacle16,obstacle17;
var obstacleImage, obstacleImage2, obstacleImage3, obstacleImage4;

var wall1, wall2, wall3, wall4;


function preload()
{
  obstacleImage = loadImage("IMG_3689.png");
  obstacleImage2 = loadImage("IMG_3690.png");
  obstacleImage3 = loadImage("IMG_3689.png");
	bg = loadImage("IMG_3680.jpg");
}

function setup() {
createCanvas(1200,400);

pc = createSprite(100,400,30,150);

wall1 = createSprite(1000,350,30,150);
wall1.visible = false;

npc1 = createSprite(1060,350,30,150);

obstacle1 = createSprite(300, 340, 40, 40);
obstacle1.addImage(obstacleImage);
obstacle1.scale = 0.157;

obstacle2 = createSprite(600, 355, 40, 100);
obstacle2.addImage(obstacleImage2);
obstacle2.scale = 0.25;

obstacle3 = createSprite(900, 325, 40, 60);
obstacle3.addImage(obstacleImage3);
obstacle3.scale = 0.24;

obstacle4 = createSprite(1150, 360, 40, 60);

ground = createSprite(10,700,10000,20);
  ground.x = ground.width /2;
  money = 0;
  
}


function draw() {
background(bg);

ground.shapecolor = "green";
text("$ "+ money, 1000,50);

if(keyDown("SPACE")) {
  pc.velocityY = -2;
}

//if (keyDown("right")) {
 // camera.on();
 // camera.x=pc.x;
 // camera.y=pc.y;    
//}

camera.position.x = pc.x;
   camera.position.y = pc.y;

pc.velocityY = pc.velocityY + 0.2
  if (ground.x > 1200){
    ground.x = ground.width/2;
  }

  if(keyDown("RIGHT_ARROW")) {
    pc.velocityX = 3;
  }

  if(keyDown("LEFT_ARROW")) {
    pc.velocityX = -3;
  }

//if (keyReleased("RIGHT_ARROW")) {
 // pc.velocityX = 0;
//}



//ground.velocityX = -3;
//obstacle1.velocityX = -3;
//obstacle2.velocityX = -3;
//obstacle3.velocityX = -3;
//wall1.velocityX = -2;
//npc1.velocityX = -2;

pc.collide(ground);


 drawSprites();
}

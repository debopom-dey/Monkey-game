var PLAY = 1;
var END = 0;
var gameState = PLAY;
var monkey , monkey_running,bg,invisibleGroup,jumpSound
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup,survivalTime
var score,backgroundImage

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  backgroundImage = loadImage("bg.png");
  obstacleImage= loadImage("obstacle.png");
  bananaImage= loadImage("banana.png");
}



function setup() {
createCanvas(600,530);
  
  // creating a background
  bg = createSprite(250,250);
  bg.addImage("background",backgroundImage);
  bg.x = bg.width /2;
  bg.scale=1;
  
  // creates monkey
  monkey=createSprite(200,350);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.2

  invisibleGround = createSprite(200,415,600,10);
  invisibleGround.visible = false;
  
  obstaclesGroup= new Group();
  bananaGroup= new Group();
  
  survivalTime=0
}


function draw() {
background(250);
 if(gameState===PLAY){
  // makes the background move
  bg.velocityX=-4;
   if (bg.x < 0){
    bg.x = bg.width/2;
   }
    //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >=120) {
        monkey.velocityY = -12;
    }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
   // sets the obstacles and bananas
   spawnObstacles();
   spawnBanana();
   
   
   
}
   //stop trex from falling down
  monkey.collide(invisibleGround);

  drawSprites();
 stroke("black");
   textSize(20);
   fill("black");
   survivalTime=Math.ceil(frameCount/frameRate())
   text("Survival Time"+ survivalTime,100,50);
   
    
  
}
function spawnObstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(600,380,10,40);
   obstacle.velocityX = -6;
    //assign scale and lifetime to the obstacle       
    obstacle.scale = 0.15;
    obstacle.lifetime = 300;
   // assigning image
   obstacle.addImage(obstacleImage);
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
 }
}
function spawnBanana(){
  if (frameCount % 80 === 0){
   banana = createSprite(600,Math.round(random(120,200)),10,40);
  banana.addImage(bananaImage);
    banana.velocityX=-6;
    banana.lifetime=300;
    bananaGroup.add(banana);
    banana.scale=0.12;
  }

}






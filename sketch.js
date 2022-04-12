var PLAY = 1;
var END = 0;
var gameState = 1;

var chicken, chicken_running, chicken_collided;
var ground, groundImage;

// var blueG, redG, silverG, yellowG, turquoiseG;
var blueCar, yellowCar, redCar, turquoiseCar, silverCar;
var blueCarImg, yellowCarImg, redCarImg, turquoiseCarImg, silverCarImg;
var blueG, yellowG, redG, turquoiseG, silverG; 


var score;
var gameOverImg, restartImg;

function preload(){
 chicken_running = loadAnimation ("Chicken 1.png", "chicken 2.png", "chicken 3.png", "chicken 4.png", "chicken 5.png", "chicken 6.png");
 chicken_collided = loadImage ("dying chick.png");
 groundImage = loadImage ("path.png");

  blueCarImg = loadImage("blueCar.png");
  redCarImg = loadImage("redCar.png");
  silverCarImg = loadImage("silverCar.png");
  turquoiseCarImg = loadImage("turquoiseCar.png");
  yellowCarImg = loadImage("yellowCar.png");
  
   restartImg = loadImage("restartButton.png"); 
 gameOverImg = loadImage("Game-Over.png");

}

function setup() {
 createCanvas(windowWidth,windowHeight);

 ground = createSprite(width/2,height/2);
 ground.addImage (groundImage);
 ground.velocityX = -4;
 ground.scale = 1.75;

 chicken = createSprite (width/2, height-20,20,20);
 chicken.addAnimation ("run", chicken_running);
 chicken.addAnimation("died", chicken_collided);
 chicken.scale = 0.8;

 gameOver = createSprite(windowWidth, windowHeight);
 gameOver.addImage(gameOverImg);

 restart = createSprite(width-50,height-50);
 restart.addImage (restartImg);

blueG = new Group();
yellowG = new Group();
redG = new Group();
turquoiseG = new Group();
silverG = new Group();

carsGroup = new Group();

chicken.setCollider("circle",0,0,15);
chicken.debug = true;
score = 0;
}

function draw() {

 if(ground.x < 525){
   ground.x = ground.width-50;

  }
 if(gameState === PLAY){
    background(0);
  chicken.y = World.mouseY;
  chicken.x = World.mouseX;
  gameOver.visible = false
  ground.velocityX = -4;
  restart.visible = false
  score = score + Math.round(frameCount/40);

 var block = createSprite(0,400,500,1000);

 edges = createEdgeSprites();
 chicken.collide(edges);

 createBlueCar();


}
  

  drawSprites();
 }

 if(carsGroup.collide(chicken)){
  gameState = END;
 } 

 if (blueG.collide(chicken)){
   chicken.destroy
   blueCar.destroy
   gameState = "END"
 }

 if (yellowCar.collide(chicken)){
 gameState = "END"
 }
 if (redCar.collide(chicken)){
 gameState = "END"
 }
 if (turquoiseCar.collide(chicken)){
 gameState = "END"
 }
 if (silverCar.collide(chicken)){
 gameState = "END"
 }

 if(gameState === "END"){
    ground.velocityX = 0;
    chicken.velocityY = 0;
    chicken.addAnimation("collided", chicken_collided);
    gameOver.visible = true;
    restart.visible = false;
     carsGroup.setVelocityEach(0);
     carsGroup.setLifetimeEach(-1);
 }
 
function createBlueCar(){
  if(World.frameCount % 200 === 0){
     var blueCar = createSprite(100,random(40,600),10,10);
     blueCar.addImage(blueCarImg);
     blueCar.velocityX = random(2,8);
     blueCar.lifetime = 400
     blueG.add(blueCar);
     blueCar.scale = 1.5

  }
  if(World.frameCount % 140 === 0){
    var redCar = createSprite(100,random(60,650),10,10);
    redCar.addImage(redCarImg);
    redCar.velocityX = random(10,15);
    redCar.lifetime = 400
    redG.add(redCar);
    redCar.scale = 1.5
  }
  if (World.frameCount % 225 === 0){
    var yellowCar = createSprite(100,random(40,650),10,10);
    yellowCar.addImage(yellowCarImg);
    yellowCar.velocityX = random(2,5)
    yellowCar.lifetime = 400;
    yellowG.add(yellowCar);
    yellowCar.scale = 1.5
  }
  if (World.frameCount % 159 === 0){
    var silverCar = createSprite(100,random(60,650),10,10);
    silverCar.addImage(silverCarImg);
    silverCar.velocityX = random(2,10);
    silverCar.lifetime = 400;
    silverG.add(silverCar);
    silverCar.scale = 1.5
  }
  if (World.frameCount % 176 === 0){
    var turquoiseCar = createSprite(100,random(60,650),10,10);
    turquoiseCar.addImage(turquoiseCarImg);
    turquoiseCar.velocityX = random(2,9);
    turquoiseCar.lifetime = 400;
    turquoiseG.add(turquoiseCar);
    turquoiseCar.scale = 0.6;
  }
  
}





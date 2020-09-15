var player, playerUp, playerUpM, playerLeft, playerLeftM, playerDown, playerDownM, playerRight, playerRightM;
var rm_homeImg, rm_home;
var dining_collider, chairCollide1, chairCollide2;
var floor2Door, stairLside;
var butler, butlerCollider, butlerImg;
var plantLcollide, plantRcollide

function preload(){
  playerDown = loadAnimation("playerimages/playerDown.png");
  playerLeft = loadAnimation("playerimages/playerLeft.png");
  playerUp = loadAnimation("playerimages/playerUp.png");
  playerRight = loadAnimation("playerimages/playerRight.png");
  playerDownM = loadAnimation("playerimages/playerDown.png","playerimages/playerDown.png","playerimages/playerDownM.png","playerimages/playerDownM.png","playerimages/playerDown2.png","playerimages/playerDown2.png","playerimages/playerDownM2.png","playerimages/playerDownM2.png");
  playerLeftM = loadAnimation("playerimages/playerLeft.png","playerimages/playerLeft.png","playerimages/playerLeftM.png","playerimages/playerLeftM.png");
  playerUpM = loadAnimation("playerimages/playerUp.png","playerimages/playerUp.png","playerimages/playerUpM.png","playerimages/playerUpM.png","playerimages/playerUp2.png","playerimages/playerUp2.png","playerimages/playerUpM2.png","playerimages/playerUpM2.png");
  playerRightM = loadAnimation("playerimages/playerRight.png","playerimages/playerRight.png","playerimages/playerRightM.png","playerimages/playerRightM.png");
  rm_homeImg = loadImage("Rooms/rm_home.jpg");
  butlerImg = loadImage("NPC-images/Haus-Butler.jpeg");
}

function setup() {
  createCanvas(1366, 657);
  player = createSprite(534, 303, 30, 30);
  player.addAnimation("playerDown", playerDown);
  player.addAnimation("playerLeft", playerLeft);
  player.addAnimation("playerUp", playerUp);
  player.addAnimation("playerRight", playerRight);
  player.addAnimation("playerDownM", playerDownM);
  player.addAnimation("playerLeftM", playerLeftM);
  player.addAnimation("playerUpM", playerUpM);
  player.addAnimation("playerRightM", playerRightM);
  player.changeAnimation("playerDown", playerDown);
  dining_collider = createSprite(767, 266, 220, 60);
  dining_collider.visible = false;
  chairCollide1 = createSprite(765, 300, 200, 30);
  chairCollide1.visible = false;
  chairCollide2 = createSprite(765, 225, 200, 25);
  chairCollide2.visible = false;
  butlerCollider = createSprite(230, 210, 25, 20);
  butlerCollider.visible = false;
  floor2Door = createSprite(486, 215, 150, 30);
  floor2Door.visible = false;
  plantRcollide = createSprite(576, 235, 35 , 365);
  plantRcollide.visible = false;
  plantLcollide = createSprite(405, 235, 35 , 365);
  plantLcollide.visible = false;
  butler = new NPC(butlerImg, 230, 220, 25 ,45);
  rm_home = new Home(rm_homeImg, 0, 0, 1366, 657);
}

function draw() {
  background("black");  

  console.log("mouseX="+mouseX+" "+"mouseY="+mouseY);

  World.frameRate = 60;

  player.scale = 1.3;
  
  if(keyDown("left_arrow")){
    player.x = player.x-2;
    player.changeAnimation("playerLeftM", playerLeftM);
  }
  if(keyWentUp("left_arrow")){
    player.changeAnimation("playerLeft", playerLeft);
  }

  if(keyDown("right_arrow")){
    player.x = player.x+2;
    player.changeAnimation("playerRightM", playerRightM);
  }
  if(keyWentUp("right_arrow")){
    player.changeAnimation("playerRight", playerRight);
  }

  if(keyDown("up_arrow")){
    player.y = player.y-2;
    player.changeAnimation("playerUpM", playerUpM);
  }
  if(keyWentUp("up_arrow")){
    player.changeAnimation("playerUp", playerUp);
  }

  if(keyDown("down_arrow")){
    player.y = player.y+2;
    player.changeAnimation("playerDownM", playerDownM);
  }

  if(keyWentUp("down_arrow")){
    player.changeAnimation("playerDown", playerDown);
  }

  //player.debug = true;

  player.collide(dining_collider);
  player.collide(chairCollide1);
  player.collide(chairCollide2);
  player.collide(butlerCollider);
  player.collide(floor2Door);
  player.collide(plantRcollide);
  player.collide(plantLcollide);

  rm_home.display();
  butler.display();
  
  fill("sky_blue");
  text("X"+mouseX+" "+"Y"+mouseY, mouseX, mouseY);

  drawSprites();
}
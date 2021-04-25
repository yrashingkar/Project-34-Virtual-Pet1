//Create variables here
var dogImg;
var dog
var happyDogImg;
var happyDog
var database;
var foodS;
var foodStock;

function preload()
{
dogImg=loadImage("images/dogImg.png");
happyDogImg=loadImage("images/dogImg1.png");
}

function setup() {
  database=firebase.database()
  createCanvas(500, 500);
  dog=createSprite(250,300,150,150)
  dog.addImage(dogImg)
  dog.scale=0.15
  
  foodStock=database.ref('Food');
  foodStock.on("value", readStock);  
}


function draw() {  
  background(46,139,87)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImg)
  }
  drawSprites();
  //add styles here
  textSize(20)
  fill("red")
  stroke("yellow")
  text("Food Remaining"+ foodS, 170, 200)
  text("Press Up Arrow to Feed Drago Milk", 130,10,300,20)
}
function readStock(data){
  foodS=data.val()
}
function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}



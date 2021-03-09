var desk;
var customer1,customerImage1;
var stopper;
var chapatiButton,chapatiSprite,chapatiImage;
var coffeeImage,coffeeSprite,coffeeButton;
var eggOmelateImage,eggOmelateSprite,eggOmelateButton;
var score=0;
var time =100;


function preload(){
  customerImage1 = loadImage("human being 4.jpg");
  chapatiImage=loadImage("chappathi.png");
  coffeeImage=loadImage("coffee.jpg");
  eggOmelateImage=loadImage("egg omelate.jpg");
  
  
  



}

function setup() {
  createCanvas(1200,400);
  desk =createSprite(600,200,1200,20);
  desk.shapeColor="brown";

  customer1=createSprite(1200,200,20,20);
  customer1.velocityX=-10;
  customer1.addImage(customerImage1);
  customer1.scale=0.2;
  customer1.depth= desk.depth;
  desk.depth=desk.depth+1;

  stopper=createSprite(100,200,10,400);
  stopper.visible=false;

  chapatiButton=createButton("Chapati");
  coffeeButton=createButton("Coffee");
  eggOmelateButton=createButton("eggOmelate");
    
}

function draw() {
  background("white");  
textSize(15);
  text("Score: "+score,100,40);
  
  customer1.collide(stopper);

  chapatiButton.position(1000,20);
  chapatiButton.mousePressed(()=>{
    chapatiSprite = createSprite(150,250,10,10);
    chapatiSprite.addImage(chapatiImage);
    chapatiSprite.scale=0.1;
    score++;
  });

  coffeeButton.position(1000,50);
  coffeeButton.mousePressed(()=>{
    coffeeSprite = createSprite(180,250,10,10);
    coffeeSprite.addImage(coffeeImage);
    coffeeSprite.scale=0.1;
    score++;
  });

  eggOmelateButton.position(1000,80);
  eggOmelateButton.mousePressed(()=>{
    eggOmelateSprite = createSprite(50,250,10,10);
    eggOmelateSprite.addImage(eggOmelateImage);
    eggOmelateSprite.scale=0.1;
    score++;
  });
  if(time>0){
  timer();
  }
  else{
    fill("red");
    textSize(30);
  text("time Left: "+0+" seconds",500,40);
    customer1.velocityX=6;
  }
  drawSprites ();
}

function mouseDragged(){
  if(mousePressedOver(chapatiSprite)){
    chapatiSprite.x = World.mouseX;
    chapatiSprite.y = World.mouseY;
  }
  if(mousePressedOver(coffeeSprite)){
    coffeeSprite.x = World.mouseX;
    coffeeSprite.y = World.mouseY;
  }

  if(mousePressedOver(eggOmelateSprite)){
    eggOmelateSprite.x = World.mouseX;
    eggOmelateSprite.y = World.mouseY;
  }
  
}

function mouseReleased(){
const chapatiSpriteX= chapatiSprite.x;
const chapatiSpriteY =chapatiSprite.y;
chapatiSprite.x = chapatiSpriteX;
chapatiSprite.y = chapatiSpriteY;

const coffeeSpriteX= coffeeSprite.x;
const coffeeSpriteY =coffeeSprite.y;
coffeeSprite.x = coffeeSpriteX;
coffeeSprite.y = coffeeSpriteY;

const eggOmelateSpriteX= eggOmelateSprite.x;
const eggOmelateSpriteY =eggOmelateSprite.y;
eggOmelateSprite.x = eggOmelateSpriteX;
eggOmelateSprite.y = eggOmelateSpriteY;
}

function timer(){
time--;

var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
fill(color);
textSize(30);
text("time Left: "+time+" seconds",500,40);

}
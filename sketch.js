var rect1, rect2;

function setup() {
  createCanvas(800,400);
  

  rect1=createSprite(400,200,50,50);
  rect2=createSprite(400,200,50,50);
  rect1.shapeColor= "green";
  rect2.shapeColor= "green"
  rect1.velocityX= 5;
  rect2.velocityX=-5;
  }

function draw() {
  background(0);  

  rect2.x= World.mouseX;
  rect2.y= World.mouseY;

  if(isTouching(rect1, rect2)){
    rect2.shapeColor="red";
    rect1.shapeColor="red";
  }
  else
{   rect2.shapeColor="green";
    rect1.shapeColor="green";}

  bounce(rect2, rect1);

  drawSprites();
}

function isTouching(o1, o2){
  
  if(o1.x - o2.x < o2.width/2 + o1.width/2
    && o2.x - o1.x<o2.width/2 + o1.width/2
    && o1.y - o2.y < o2.height/2 + o1.height/2
    && o2.y - o1.y<o2.height/2 + o1.height/2 ){
      return true;

     }else
      return false;

}

function bounce(O1, O2){

  if(O2.x - O1.x < O1.width/2 + O2.width/2
    && O1.x - O2.x<O1.width/2 + O2.width/2){
   O2.velocityX=O2.velocityX * (-1);
   O1.velocityX=O1.velocityX * (-1);
   }
     
   if(O2.y - O1.y < O1.height/2 + O2.height/2
    && O1.y - O2.y <O1.height/2 + O2.height/2){
   O2.velocityY=O2.velocityY * (-1);
   O1.velocityY=O1.velocityY * (-1);
   }

}

var moving_rect,fixed_rect;


function setup() {
  createCanvas(800,400);
  moving_rect=createSprite(200, 100, 50, 50);
  moving_rect.shapeColor="green";

  fixed_rect=createSprite(200,100,50,50);
  fixed_rect.shapeColor="green";
}

function draw() {
  background(255,255,255); 
  
  moving_rect.x=mouseX;
  moving_rect.y=mouseY;

  if(moving_rect.x-fixed_rect.x<=(fixed_rect.width/2+moving_rect.width/2)&&
     fixed_rect.x-moving_rect.x<=(fixed_rect.width/2+moving_rect.width/2)&&
     moving_rect.y-fixed_rect.y<=(fixed_rect.height/2+moving_rect.height/2)&&
     fixed_rect.y-moving_rect.y<=(fixed_rect.height/2+moving_rect.height/2)){

     moving_rect.shapeColor="blue";
     fixed_rect.shapeColor="blue";

     }
  
     else
     {moving_rect.shapeColor="green";
     fixed_rect.shapeColor="green";
    
    
    
    }



  drawSprites();
}
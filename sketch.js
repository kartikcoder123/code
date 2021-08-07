var ball;
var edges;
function setup() {
  createCanvas(400,400);
  ball = createSprite(200,200);
  ball.velocityX = 3
  ball.velocityY = -3
  edges = createEdgeSprites();
}

function draw() 
{
  background(30);
  ball.bounceOff(edges);
  drawSprites();
}





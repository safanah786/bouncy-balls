const Engine=Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine;
var world;
var ground;
var ball


function setup() {
 var canvas= createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
var ground_options={
  isStatic:true
}
  ground=Bodies.rectangle(200,380,200,5,ground_options);
  World.add(world,ground);
  
  var ball_options={
    restitution:2.0
  }
  ball=Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);

console.log(ground);


//  createSprite(400, 200, 50, 50);
}

function draw() 
{
  background(0);  
 Engine.update(engine);



  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,50);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
 // drawSprites();
}
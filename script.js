const Engine=Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine;
var world;
var ground;


function setup() {
 var canvas= createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  ground=Bodies.rectangle(200,10,50,50);
  World.add(world.object);
console.log(ground);
//  createSprite(400, 200, 50, 50);
}

function draw() 
{
  background(0);  



  rectMode(CENTER);
  rect(200,200,50,50);
 // drawSprites();
}
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;

var ball1
var bin1
var bin2 
var bin3
var ground1

function setup() {
  createCanvas(1600,700);
  engine = Engine.create();
  world = engine.world;
  
bin1 = new bin(1230,650,200,20)

bin2 = new bin(1330,600,20,100)

bin3 = new bin(1130,600,20,100)

ball = new Ball(100,650,20)

ground1 = new ground(800,670,1600,10)
Engine.run (engine)
} 

function draw() {
  background(0);  
  drawSprites();
  bin1.display()
  bin2.display()
  bin3.display()
  ball.display()
  ground1.display()
  
  BallIMG=loadImage("paper.png")
	binIMG=loadImage("dustbingreen.png")
}

function keyPressed(){
  if (keyCode===UP_ARROW){
     Matter.Body.applyForce(ball.body,ball.body.position,{x:80,y:-80})
  }
}

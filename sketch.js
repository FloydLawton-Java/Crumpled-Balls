var ball;
var side1,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	ground = new Ground(width/2, 670, width, 10 );
 	//World.add(world, ground);


	//Engine.run(engine);
  
	side1= new Dustbin(600, 650, 200, 20);
	side2= new Dustbin(500, 610, 20, 100);
	side3= new Dustbin(700, 610, 20, 100);

	ball= new Paper(100, 200, 10);
}

function draw() {
  //rectMode(CENTER);
  background("black");
  Engine.update(engine);
  side1.display();
  side2.display();
  side3.display();
  keyPressed();
  
  ground.display();

  ball.display();
  drawSprites();
 
}
function keyPressed(){
   if (keyCode == UP_ARROW){
	   Matter.Body.applyForce(ball.body, ball.body.position, {
		   x:10, 
		   y:-50
	   });
   }
}

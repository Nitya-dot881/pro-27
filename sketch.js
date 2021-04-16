
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground=new Ground(400,50,300,20)
    bob=new BOB(300,300,20,20)
	bob2=new BOB(340,300,20,20)
	bob3=new BOB(380,300,20,20)
	bob4=new BOB(420,300,20,20)
	bob5=new BOB(460,300,20,20)
 rope1=new CONSTRAINT(bob.body,ground.body,-bob*2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  ground.display()
  rope1.display()
  drawSprites();
 
}




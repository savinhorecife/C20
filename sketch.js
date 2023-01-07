
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var block1;
var block2;
var block3;
let engine;
let world;
var ground;





function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var block1_opitions = {
		restitution:0.5,
		fricton:0.02,
		frictionAir:0
	}
	var block2_opitions = {
		restitution:0.07,
		fricton:0.01,
		frictionAir:0.1
	}
	var block3_opitions = {
		restitution:0.01,
		fricton:1,
		frictionAir:0.3
	}
	var ground_opitions ={
		isStatic:true
	}
	ground = Bodies.rectangle(400,690,800,20,ground_opitions);
    World.add(world,ground)
	//Crie os Corpos Aqui.
	block1 = Bodies.circle(220,10,10,block1_opitions);
	World.add(world,block1)

	block2 = Bodies.rectangle(110,50,10,10,block2_opitions);
	World.add(world,block2)

	block3 = Bodies.rectangle(350,50,10,10,block3_opitions);
	World.add(world,block3)

ellipseMode(RADIUS)

//	Engine.run(engine);
rectMode(CENTER);
}


function draw() {
  
  background("green");
  
ellipse(block1.position.x,block2.position.y,30);
rect(block2.position.x,block2.position.y,40,20);
rect(block3.position.x,block3.position.y,50,25);
rect(ground.position.x,ground.position.y,800,20);
 Engine.update(engine)
  
}





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,boy,stone;
function preload(){
	image1=loadImage("Plucking mangoes/stone.png")
	image=loadImage("Plucking mangoes/boy.png")	
}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

ground=createSprite(400,690,800,20)
boy=createSprite(300,600,20,20)
tree=new Tree(600,502,20,20)
stone=new Stone(700,600,30,20)
mango1=new Mango(500,500,20,20);
mango2=new Mango(700,500,20,20);
mango3=new Mango(600,400,20,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  tree.display();
 stone.display();
 mango1.display();
 mango2.display();
 mango3.display();
 image(image,boy.position.x,boy.position.y)
 image(image1,stone.position.x,stone.position.y)
}
function mouseDragged(){
	Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
	slingshot.fly();
}



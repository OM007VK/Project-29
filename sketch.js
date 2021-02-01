const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1;

function preload()
{
	
}

function setup() {

    createCanvas(1300, 600);

    engine = Engine.create();
	world = engine.world;

    ground1 = new ground(width/2,height-20,width,10)
}


function draw() {
background(220);
 
ground1.display();

block1.display();     
block2.display();     
block3.display();     
block4.display();     
block5.display();     
block6.display();     
block7.display();     
block8.display();     
block9.display();     
block10.display();     
block11.display();     
block12.display();     
block13.display();     
block14.display();     
block15.display();     
block16.display();     
}













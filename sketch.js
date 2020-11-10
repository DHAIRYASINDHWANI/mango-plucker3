
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var tree,ground,stone1,boy,boyImage,launcher1,groundImg;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;
function preload()
{
boyImage = loadImage("boy.png");
groundImg = loadImage("grass.png")
}

function setup() {
	createCanvas(2000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(1300,580);

	stone1=new stone(235,420,40,{isStatic : true}); 

	ground = new Ground(width/2, 650, width, 10);
	
	boy = createSprite(300,550,200,300);
	boy.addImage(boyImage);
	boy.scale = 0.2;

	launcher1=new launcher(stone1.body,{x:180,y:450});

	mango1 = new mango(1300,150,25);
	mango1.scale = 2;
	mango2 = new mango(1200,170,25);
	mango3 = new mango(1340,190,25);
	mango3.scale = 2;
	mango4 = new mango(1240,200,25);
	mango5 = new mango(1400,260,25);
	mango5.scale = 2;
	mango6 = new mango(1340,300,25);
	mango7 = new mango(1200,320,25);
	mango7.scale = 2;
	mango8 = new mango(1340,100,25);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1300,
		  height: 600,
		  wireframes: false
		}
	  });

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  textSize(30);
  textFont("monospace");
  text("Press SPACE to get a Second Chance to Play!!😉",70 ,70);

  tree.display();

  ground.display();

  stone1.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  detectollision(stone1,mango1);
  detectollision(stone1,mango2);
  detectollision(stone1,mango3);
  detectollision(stone1,mango4);
  detectollision(stone1,mango5);
  detectollision(stone1,mango6);
  detectollision(stone1,mango7);
  detectollision(stone1,mango8);

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone1.body, {x:mouseX, y:mouseY}) ;
}

function mouseReleased(){
	launcher1.fly();
}

 function detectollision(lstone,lmango){
	
  mangoPosition=lmango.body.position
  stonePosition=lstone.body.position
  
  var distance=dist(stonePosition.x, stonePosition.y, mangoPosition.x, mangoPosition.y)
  	if(distance<=lmango.r+lstone.r){
  	  Matter.Body.setStatic(lmango.body,false);
    }
  }
  function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone1.body, {x:180,y:450}) 
	  launcher1.attach(stone1.body);
	}
}
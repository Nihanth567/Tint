
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var gameState = onsling;

function setup() {
  engine = Engine.create();
  world = engine.world;
  
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  ground1 = new Ground(400,390,800,20);
  stand1 = new Ground(400,250,150,15);
  stand2 = new Ground(645,175,150,15);
  block1 = new Box(355,215,30,40);
  block2 = new Box(390,215,30,40);
  block3 = new Box(420,215,30,40);
  block4 = new Box(450,215,30,40);
  block5 = new Box(400,175,30,40);
  block6 = new Box(435,175,30,40);
  block7 = new Box(365,175,30,40);
  block8 = new Box(420,130,30,40);
  block9 = new Box(375,130,30,40);
  block10 = new Box(400,90,30,40);

  block11 = new Box(600,135,30,40);
  block12 = new Box(635,135,30,40);
  block13 = new Box(665,135,30,40);
  block14 = new Box(645,90,30,40);
  block15 = new Box(665,90,30,40);
  block16 = new Box(695,90,30,40);

polygon = new Polygon(100,200,15);
//stand3 = new Ground(100,200,80,10);

  //polygon = Bodies.circle(50,200,20);
      //World.add(world,polygon);

   //slingShot = new SlingShot(polygon,{x:100,y:200});

}

function draw() {
  background(30);  
  
  ground1.display();
  stand1.display();
  stand2.display();
  //stand3.display
  
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

  slingShot.display();
  polygon.display();


  drawSprites();
}

function mouseDragged(){
    
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
 
}
function mouseReleased(){
 slingshot.fly();
 gameState = launched;
}
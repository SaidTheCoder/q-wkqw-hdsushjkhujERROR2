const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg,b1;
var canon,canonI;
//var bomb, bombI;
var score = 0;

function preload(){
bg = loadImage("images/background.gif")

bombI = loadImage("images/bombImg.png")

canonI = loadImage("images/CanonImg.png")
}


function setup() {
  createCanvas(1800,800);
  engine = Engine.create();
    world = engine.world;

    
 //lane 1
    brick1=new Brick(1175,700,70,70)
    brick2=new Brick(1250,700,70,70)
    brick3=new Brick(1325,700,70,70)
    brick4=new Brick(1400,700,70,70)
    brick5=new Brick(1475,700,70,70)
    brick6=new Brick(1550,700,70,70)
    brick7=new Brick(1625,700,70,70)
  //lane 2
    brick8=new Brick(1175,600,70,70)
    brick9=new Brick(1250,600,70,70)
    brick10=new Brick(1325,600,70,70)
    brick11=new Brick(1400,600,70,70)
    brick12=new Brick(1475,600,70,70)
    brick13=new Brick(1550,600,70,70)
    brick14=new Brick(1625,600,70,70)
//lane 3
    brick15=new Brick(1175,500,70,70)
    brick16=new Brick(1250,500,70,70)
    brick17=new Brick(1325,500,70,70)
    brick18=new Brick(1400,500,70,70)
    brick19=new Brick(1475,500,70,70)
    brick20=new Brick(1550,500,70,70)
    brick21=new Brick(1625,500,70,70)
//lane 4
    brick22=new Brick(1250,400,70,70)
    brick23=new Brick(1325,400,70,70)
    brick24=new Brick(1400,400,70,70)
    brick25=new Brick(1475,400,70,70)
    brick26=new Brick(1550,400,70,70)
//lane 5
    brick27=new Brick(1325,400,70,70)
    brick28=new Brick(1400,400,70,70)
    brick29=new Brick(1475,400,70,70)

    crown1=new Crown(1000,250,40,35)
    ground = new Ground(900,780,1800,20)

    bomb1 = new Bomb(275,750,50,50)

    slingshot = new SlingShot(bomb1.body,{x:200, y:500});

}

function draw() {
  background(bg);  
  Engine.update(engine);

canon = createSprite(200,720,210,120)
canon.addImage(canonI)
canon.scale = 0.4



  brick1.display();
  brick1.score();
  brick2.display();
  brick2.score();
  brick3.display();
  brick3.score();
  brick4.display();
  brick4.score();
  brick5.display();
  brick5.score();
  brick6.display();
  brick6.score();
  brick7.display();
  brick7.score();
  brick8.display();
  brick8.score();
  brick9.display();
  brick9.score();
  brick10.display();
  brick10.score();
  brick11.display();
  brick11.score();
  brick12.display();
  brick12.score();
  brick13.display();
  brick13.score();
  brick14.display();
  brick14.score();
  brick15.display();
  brick15.score();
  brick16.display();
  brick16.score();
  brick17.display();
  brick17.score();
  brick18.display();
  brick18.score();
  brick19.display();
  brick19.score();
  brick20.display();
  brick20.score();
  brick21.display();
  brick21.score();
  brick22.display();
  brick22.score();
  brick23.display();
  brick23.score();
  brick24.display();
  brick24.score();
  brick25.display();
  brick25.score();
  brick26.display();
  brick26.score();
  brick27.display();
  brick27.score();
  brick28.display();
  brick28.score();
  brick29.display();
  brick29.score();

  crown1.display();

  //canon.display();

  ground.display();

  bomb1.display();

  slingshot.display();

  textSize(35);
  fill ("black")
  text("Score : "+score,200,40 )


  drawSprites();
}

function keyPressed(){
	if(keyCode===32){
    slingshot.fly();
		Matter.Body.applyForce(bomb1.body,bomb1.body.position,{x:mouseX,y:mouseY})
  }
  if(keyCode===82){
    slingshot.attach(bomb1.body)
}
}
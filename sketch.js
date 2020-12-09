const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, bo, box1, box2, box3, box4, box5, box6, box7, box8, box9, box10;
var box11, box12, box13, box14, box15, box16, box17, box19, box20, ball, rope, box21;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, 590, 1200, 10);
    box1 = new Box(600, 545, 40, 80);
    box2 = new Box(640, 545, 40, 80);
    box3 = new Box(680, 545, 40, 80);
    box4 = new Box(720, 545, 40, 80);
    box5 = new Box(600, 465, 40, 80);
    box6 = new Box(640, 465, 40, 80);
    box7 = new Box(680, 465, 40, 80);
    box8 = new Box(720, 465, 40, 80);
    box9 = new Box(600, 385, 40, 80);
    box10 = new Box(640, 385, 40, 80);
    box11 = new Box(680, 385, 40, 80);
    box12 = new Box(720, 385, 40, 80);
    box13 = new Box(600, 305, 40, 80);
    box14 = new Box(640, 305, 40, 80);
    box15 = new Box(680, 305, 40, 80);
    box16 = new Box(720, 305, 40, 80);
    box17 = new Box(600, 225, 40, 80);
    box18 = new Box(640, 225, 40, 80);
    box19 = new Box(680, 225, 40, 80);
    box20 = new Box(720, 225, 40, 80);
    ball = new Ball(100, 100, 80);
    rope = new Rope(ball.body, {x:300, y:200});
    box21 = new Ground(150, 190, 300, 20);
    
}

function draw(){
    background(0);
    Engine.update(engine);

    ground.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    ball.display();
    rope.display();
    box21.display();
  
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY});
}

//function mouseReleased(){
//    rope.throw();
//}


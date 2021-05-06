const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine, world;

var particle;
var plinkos = [];
var divisions =[];


var score=0
var count=0


var divisionHeight=300;
var gameState="play";

function preload() {
   
}

function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(240,height,480,20);
   
for(var k = 0; k<=width; k = k + 80) {
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
}

for (var j = 40; j <=width; j=j+50) 
{
    plinkos.push(new Plinko(j,75,15));
}

for (var j = 15; j <=width-10; j=j+50) 
{
    plinkos.push(new Plinko(j,175,15));
}

for (var j = 40; j <=width; j=j+50) 
{
    plinkos.push(new Plinko(j,275,15));
}

for (var j = 15; j <=width; j=j+50) 
{
    plinkos.push(new Plinko(j,375,15));
}
    

}

function draw(){
    background("lightblue");
    Engine.update(engine);
    textSize(15)
    text("Score:"+score,30, 45);
    ground.display();

    for (var k = 0; k < divisions.length; k++) {
        divisions[k].display();
    }

    for (var j = 0; j < plinkos.length; j++) {
        plinkos[j].display();
    }

}

function mousePressed() 
{
if(gameState!=="end")
{
    particle=new Particle(mouseX,10,10);
}
}

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bin ;restitution,friction,desiny;
var options ={
    isStatic : false
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

    bin = new Bin(700,320,70,70);
    

    paperballs = new paperballs(100,100);

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(bin.body.position.y);
    console.log(bin.body.angle);
    bin.display();
    ground.display();
    paperballs.display();
}
function keypressed (){
if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
}
}
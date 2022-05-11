const Engine = Matter.Engine;
const  World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var engine, world;

var suelo;

var hielos=[];

function preload(){
  
}

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  var options={
    isStatic:true
  }
  suelo= Bodies.rectangle(400,780,800,30, options);
  World.add(world,suelo);
  rectMode(CENTER);

  
}
 
function draw() {
  background("black");
  rect(suelo.position.x, suelo.position.y, 800,30); 
  
  fill("white");
  textSize(20);
  text("¡Presiona la flecha para abajo y desestresate al ver los hielos caer!", 100,30)

  for(var i=0; i<hielos.length; i++){
    mostrarHielos(hielos[i],i);
  }

  Engine.update(engine);
  drawSprites();
}

function keyPressed(){
  if(keyCode===DOWN_ARROW){
    var hielitos= new Hielo(random(50,750),-20);
    hielos.push(hielitos);
    
  }
}

function mostrarHielos(hielos,index){
  if(hielos){
    hielos.display();
  }
}


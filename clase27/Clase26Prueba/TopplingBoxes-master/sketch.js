const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig_1,pig_2;
var log_1,log_2,log_3,log_4;
var bird1;
var fondo;
var plataforma;
var restriccion;
var resortera;
var gamestate = "enResortera";
var bg;
var puntos = 0;
var ground;
var ground_2;

function preload(){
  //fondo = loadImage("imagenes/bg.png")
   getFondo();
}



function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    ground_2 = new Ground(1210,300,20,600);

    box1 = new Box(700,440,70,70);
    box2 = new Box(920,440,70,70);
  
    pig_1 = new Pig(810,450);

    log_1 = new Log(810,400,300,PI/2);

    box3 = new Box(700,350,70,70);
    box4 = new Box (920,350,70,70);


    pig_2 = new Pig (810,380);

    log_2 = new Log (810,270,300,PI/2);

    box5 = new Box(810,120,70,70);
    log_3 = new Log(760,120,150,PI/5);
    log_4 = new Log(870,120,150,PI/-5);
    bird1 = new Bird(150,100);
    plataforma = new Ground(150, 405,300,170); 
    //log_5 = new Log(230,180,80,PI);
    //restriccion = new Restriccion(bird1.body,log_5.body);

    resortera = new Resortera(bird1.body,{x:225,y:140})
}

function draw(){
if (fondo){
  background(fondo);
}

textSize(30)
fill("red")
text ("puntos: " + puntos,width-300,50);
pig_1.score()
pig_2.score()

    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    ground_2.display();
    pig_1.display();
    log_1.display();
    box3.display();
    box4.display();
    pig_2.display();
    log_2.display();
    box5.display();
    log_3.display();
    log_4.display();
    bird1.display();
    plataforma.display();
    //log_5.display();
    //restriccion.display();
    resortera.display();
    
}

function mouseDragged(){
  if (gamestate === "enResortera"){
    Matter.Body.setPosition(bird1.body,{x:mouseX,y:mouseY})
  }
  
}

function mouseReleased(){
resortera.fly();
gamestate = "lanzado";
}

function keyPressed(){
console.log(bird1.body.speed)
  
if(keyCode === 70 && bird1.body.speed < 1){
  bird1.trayectoria = []
  Matter.Body.setPosition(bird1.body,{x:225,y:140})
  resortera.reset(bird1.body);
  gamestate = "enResortera";
} 

}
async function getFondo(){
  var respuesta = await fetch("https://worldtimeapi.org/api/timezone/America/Mexico_City");
  var respuestaJson = await respuesta.json();
  var datetime = respuestaJson.datetime;
  var hora = datetime.slice(11,13)
  //console.log(hora);
  
  if (hora >= 6 && hora <= 18){
   bg = "imagenes/bg.png";
  }
  else{
    bg = "imagenes/bg2.jpg";
  }

  fondo = loadImage(bg);
}

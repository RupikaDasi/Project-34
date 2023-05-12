
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var ball;
var hoop;
var count = 0;
var block;
var a = false;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground (200,390,400,20);

  var ball_options = {
    restitution: 0.20,
    isStatic:false
  }

  var block_options = {
    isStatic: true
  }

  hoop = createImg("basketball-hoop.png");
  hoop.position(230,187);
  hoop.size(200,200);

  ball = Bodies.circle(130,100,15, ball_options);
  World.add(world,ball);

  block = createSprite(310,300,30,5);
  block.debug = true;

  button_up = createImg("up.png");
 button_up.position (220,30)
button_up.size(50,50);
button_up.mouseClicked(v_force)

button_right = createImg("right.png");
button_right.position (120,30);
button_right.size(50,50)
button_right.mouseClicked(h_force)

  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}


function draw() 
{
  background(51);

  ellipse(ball.position.x, ball.position.y, 15);
  textSize(20);
  fill("white")
  text("Score:" + count, 10, 20);

  if(collide(ball,block)==true)
  {
    console.log("You Win!!")
    count += 10;
    block.destroy;
    a = true;
  }



  ground.show();
  Engine.update(engine);
  touch();

  drawSprites();

  
}

function touch () {

  if (a === true) {
    text("You Win!", 100,200)
  }
}



function collide(body,sprite)

{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=20)
            {
               return true; 
            }
            else{
              return false;
              a = false;
            }
         }
}

function h_force () {
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.001, y:0});
  }
  
  function v_force () {
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0, y:-0.01});
  }
  




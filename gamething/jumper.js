var w = window.innerWidth;
var h = window.innerHeight;
var jumper = new jumper();
var barrier = new barrier();
var hit = false;

setTimeout(function(){
  var endGame = document.body.innerHTML = "You ran out of time";
}, 30000);
var timeLeft = 29;
var elem = document.getElementById('timerDisplay');

var timerId = setInterval(countdown, 1000);
function countdown() {
if (timeLeft == 0) {
clearTimeout(timerId);
doSomething();
} else {
elem.innerHTML = timeLeft + ' seconds remaining';
timeLeft--;
  } 
}

  function setup(){
    createCanvas(w,h);
    img = loadImage('fire.gif');
  }
  function draw() {
    jumper.show();
    jumper.update();
    jumper.move();
    barrier.show();
    barrier.grav();
    hit = collideRectRect(barrier.x,barrier.y,50,barrier.wall,jumper.x,jumper.y,50,75);
    print(hit);
    }
  function jumper() {
    this.x = 50;
    this.y = 0;
    this.gravity = 2;
    this.lift = -10;
    this.velocity = 0;
    this.show = function() {
      fill(color('red'));
      rect(this.x,this.y,50,50);
      strokeWeight(0);
      
      this.move = function () {
        if(keyIsDown(68)) {
            this.x += 10;
          }
          if(keyIsDown(65)){
            //left arrow
            this.x -= 10;
          }
    }
    }
    this.up = function() {
      this.velocity += this.lift;
    }
    this.update=function() {
      this.velocity += this.gravity;
      this.y += this.velocity;
      this.velocity * 0.5; 
      if(this.y > h) {
        this.y = h;
        this.velocity = 0;
      }
    }
  }
  function barrier() {
    this.x = w + 100;
    this.y = 100;
    this.gravity = 10;
    this.wall = Math.floor(Math.random()*h-50);
    this.show=function(){
      fill(color('white'));
      rect(this.x,this.y,100,this.wall);
    }
    this.grav=function() {
      this.x-=this.gravity;
      if(this.x<-100){
        this.x=w+100;
        this.wall=Math.floor(Math.random()*h-100);
      }
    }
    this.kill=function() {
        
        if(hit == true){
          noLoop(); //stops draw function
          var scoreTally = Number(30) - Number(timeLeft);
          var lost = document.body.innerHTML = "You lasted " + scoreTally + " seconds.";

        }
      }
    
  }
  function keyPressed(){
    if(keyCode===32){
      jumper.up();
    }
  }
  
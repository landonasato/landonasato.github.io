



var w = window.innerWidth;
var h = window.innerHeight;
var jumper = new jumper();
var barrier = new barrier();
var hit = false;
var score = -1;

  function setup(){
    createCanvas(w,h);
    frog = loadImage('redstone.png');
    stab = loadImage('tnt.png');
    bg = loadImage('background.png');
    
  }
  function draw() {
    //background(color('purple'));
    background(bg);
    jumper.show();
    jumper.update();
    jumper.move();
    barrier.show();
    barrier.grav();
    var yeet = Math.floor(Math.random()*100);
    hit = collideRectRect(barrier.x,barrier.y,50,barrier.wall,jumper.x,jumper.y,50,75);
    print(hit);
    if (hit === true){
      console.log('yeet');
    }
    }
  function jumper() {
    this.x = 50;
    this.y = 0;
    this.gravity = 0.5;
    this.lift = -10;
    this.velocity = 0;
    this.show=function(){
      //fill(color('red'));
      image(stab,this.x-100,this.y-100,200,100);
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
      this.velocity * 0.8; 
      if(this.y > h) {
        this.y = h;
        this.velocity = 0;
      }
    }
  }
  function barrier() {
    this.gravity = Math.floor(Math.random()*20) + 10;
    this.x = w + 100 ;
    this.wall = Math.floor(Math.random()*h-200);
    this.show=function(){
      //fill(color('white'));
      image(frog,this.x-100,this.y-100,200,this.wall);
      noFill();
      rect(this.x,this.y,100,this.wall);
    }
    this.grav=function() {
      this.x-=this.gravity;
      if(this.x<-100){
          this.gravity = Math.floor(Math.random()*30 - 10) + 10;
          score +=1;
          console.log(score);
        this.y = Math.floor(Math.random()*h);
        this.x=w+100;
        this.wall=Math.floor(Math.random()*h-100);
        
      }
      
    }
    this.kill=function() {
      if(hit === true){
console.log('ded');

      }
      }
    
  }
  
  function keyPressed(){
    if(keyCode===32){
      jumper.up();
    }
    if(keyCode===16){
      jumper.y=0;
    }
  }
  
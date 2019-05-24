var w = window.innerWidth;
var h = window.innerHeight;
var jumper = new jumper();
var barrier = new barrier();
var hit = false;
var score = 0;
let mcbg;

  function setup(){
    createCanvas(w,h);
    frog = loadImage('tnt.png');
    stab = loadImage('redstone.png');
    bg = loadImage('minecraft.jpg');
    
  }
  function draw() {
    //background(color('purple'));
    background(bg);
    //background(image(mcbg, 150, 150));
    jumper.show();
    jumper.update();
    jumper.move();
    barrier.show();
    barrier.grav();
    var yeet = Math.floor(Math.random()*100);
    hit = collideRectRect(barrier.x,barrier.y,50,barrier.wall,jumper.x,jumper.y,50,75);
    print(hit);
    if (hit === true){
      noLoop();
      var somethingmusical = document.getElementById('music');
      somethingmusical.pause();
      //var scoreTally = Number(30) - Number(timeLeft);
      var lost = document.body.innerHTML = "Press 'r' to Restart";
      var header1 = document.createElement("H1");
      var text1 = document.createTextNode("Your score is " + score);
      header1.appendChild(text1);
      document.body.appendChild(header1);
      var diefam = new Audio('tnt.mp3');
      diefam.play();

    }
    }
  function jumper() {
    this.x = 100;
    this.y = 0;
    this.gravity = 0.5;
    this.lift = -10;
    this.velocity = 0;
    this.show=function(){
      //fill(color('red'));
      image(stab,this.x-100,this.y-100,50,50);
      //image(mcbg, 10, 10);
      rect(this.x,this.y,50,50);
      strokeWeight(0);
      this.move = function () {
        if ((keyIsDown(65)) && (this.x>60)) {
            //a
            this.x-= 10;
        }
        if ((keyIsDown(68)) && (this.x<w)) {
          //d
          this.x+= 10;
        }

  
  
    }
    }
    this.up = function() {
      this.velocity += 0;
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
      if(this.y < 0) {
        this.y = 100;
        this.velocity = 0;
      }
    }
  }
  function barrier() {
    this.gravity = Math.floor(Math.random() * (20 - 10) ) + 109; //Math.floor(Math.random() * (max - min) ) + min;
    this.x = w + 100;
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
          this.gravity = Math.floor(Math.random()*30) + 10;
          document.getElementById("score").innerHTML = "Score: " + score;
          score +=1;
          console.log(score);
        this.y = Math.floor(Math.random()*h);
        this.x=w+100;
        this.wall=Math.floor(Math.random()*h-100);
        
      }
      
    }
    this.kill=function() {
      }
    
  }
  
  function keyPressed(){
    //if(keyCode===32 && this.y<h-50){
      //jumper.up();
    //}
    if(keyCode===32) {
      jumper.up();
      var jump = new Audio('jump.mp3');
      jump.play();
    }
    if(keyCode===16){
      jumper.y=0;
    }
    if(keyCode===82){
      location.reload();
    }
  }
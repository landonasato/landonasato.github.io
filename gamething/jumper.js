var w = window.innerWidth;
var h = window.innerHeight;
var jumper = new jumper();
  function setup() {
    createCanvas(w,h);
  }
  function draw() {
    background(0);
    jumper.show();
    jumper.update();
  }
  function jumper() {
    this.x=50;
    this.y=0;
    this.gravity= 0.5;
    this.lift= -10;
    this.velocity= 0;
    this.show = function() {
      fill(color('red'));
      ellipse(this.x,this.y,50,50);
    }
    this.up = function() {
      this.velocity += this.lift;
    }
    this.update = function() {
      this.velocity += this.gravity;
      this.y += this.velocity;
      this.velocity * 0.8;
      if (this.y > h) {
        this.y = h;
        this.velocity = 0;
      }
    }
  }
  function keyPressed(){
    if(keyCode===32){
      jumper.up();
    }
  }
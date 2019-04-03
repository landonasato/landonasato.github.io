var w = window.innerWidth;
var h = window.innerHeight;
var boxes = new boxes();

function draw() {
boxes.show();
boxes.grav();
}

function boxes(){
    this.x = w + 100;
    this.y = 100;
    this.gravity = 10;
    this.yeet = Math.floor(Math.random()h-100)
    this.show = function(){
      fill(255);
      rect(this.x,this.y,100,this.yeet);
    }
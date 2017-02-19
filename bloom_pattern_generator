var movers = [];
var attractor;
var slider;

var k = 6;
var t = 0.01;

function setup() {
  createCanvas(500, 500);
  slider = createSlider(1, 10, 4, 0.1);
  for (var i = 0; i < 1; i++) {
    movers[i] = new Mover();
  }
  attractor = new Attractor();
}

function draw() {
  background(20);
  k = slider.value();
  
  translate(width / 2, height / 2);
  
  attractor.display();
  
  for (var i = 0; i < movers.length; i++) {
    var force = attractor.calculateAttraction(movers[i]);
    // console.log(force);
    movers[i].applyForce(force);
    movers[i].update();
    movers[i].display();
    movers[i].checkEdges();
    
    attractor.display();
  }
}

var Mover = function(mass, x, y) {
  this.position = createVector(x, y);
  this.velocity = createVector(1, 1);
  this.acceleration = createVector(0, 0);
  this.mass = 0.1;
  this.a = 5;

  this.applyForce = function(force) {
    var f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  };

  this.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  };

  this.display = function() {
    stroke(255, 50);
    strokeWeight(0.6);
    noFill();
    beginShape();
    for (var a = 0; a < TWO_PI; a += 0.01) {
      // this.r = 200 * sin(k * this.a);
      this.r = 200 * noise(sin(k * this.a), t);
      this.position.x = this.r * cos(this.a);
      this.position.y = this.r * sin(this.a);
      point(this.position.x, this.position.y);
      ellipse(this.position.x, this.position.y, this.mass * 0.3, this.mass * 0.3)
      vertex(this.position.x, this.position.y);
      
      this.a += 0.01;
      this.mass += 0.01;

    }
    endShape(CLOSE);
  };

  this.checkEdges = function() {
    if (this.mass > width) {
      this.mass *= -1;
    }
  }
};

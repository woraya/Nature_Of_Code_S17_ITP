var Attractor = function() {
  this.position = createVector(1, 1);
  this.mass = 50;
  this.G = 100;

  this.calculateAttraction = function(m) {
    // Calculate direction of force
    var force = p5.Vector.sub(this.position, m.position);
    
    // Distance between objects       
    var distance = force.mag();
    
    // Limiting the distance to eliminate "extreme" results for very close or very far objects                            
    distance = constrain(distance, 5, 25);
    
    // Normalize vector (distance doesn't matter here, we just want this vector for direction)                                  
    force.normalize();
    
    // Calculate gravitional force magnitude  
    var strength = (this.G * this.mass * m.mass) / (distance * distance);
    
    // Get force vector --> magnitude * direction
    force.mult(strength);
    // console.log(force);
    return force;
    
  };

  // Method to display
  this.display = function() {
    ellipseMode(CENTER);
    strokeWeight(1);
    stroke(255, 255, 255);
    ellipse(this.position.x, this.position.y, this.mass*2, this.mass*2);
  }
}

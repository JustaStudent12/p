class Ball{
  constructor(x,y,radius){

      var ball_options={
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
        }
      this.body  = Bodies.circle(x,y,radius,ball_options);
      this.radius=radius;
      World.add(world,this.body);
  }
  display(){
      noStroke();
      fill("red");
      ellipseMode(RADIUS);
      ellipse(this.body.position.x,this.body.position.y,this.radius);
      
  }
  
  
}
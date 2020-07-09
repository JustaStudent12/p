class Connector{

  constructor(pointA,bodyB){
      var options = {
          pointA : pointA,
          bodyB : bodyB,
          stiffness: 0.004,
          length : 100
        }
        this.pointA=pointA;
        this.string = Constraint.create(options);
        World.add(world,this.string);
  }
  display(){
      var pointA = this.pointA;
      var pointB = this.string.bodyB.position;
      push();
      strokeWeight(6);
      stroke("darkblue");
      line(pointA.x,pointA.y,pointB.x,pointB.y);
      pop();
  }
}
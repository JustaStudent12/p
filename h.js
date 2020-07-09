class Holder{
    constructor(){
        var holder_options={
            isStatic: true
          }
        
        this.holder = Bodies.rectangle(400,100,600,10,holder_options);
        World.add(world,this.holder);
    }
    display(){
        noStroke();
        fill ("yellow");
        rectMode(CENTER);
        rect(this.holder.position.x,this.holder.position.y,600,10);
        
    }
}
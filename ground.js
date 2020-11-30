class Ground {
    constructor(x,y,width,height){
    var bodies = {
        isStatic: true
    }
    this.body = Bodies.rectangle(x,y,width,height,bodies);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
    
    }
    display(){
    var pos = this.body.position;    
    rectMode(CENTER);
    fill("brown");
    rect(pos.x,pos.y,this.width,this.height)
    }
     }
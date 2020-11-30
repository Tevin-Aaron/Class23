 class Box {
constructor(x,y,width,height){
var bodies = {
    restitution: 1
}
this.body = Bodies.rectangle(x,y,width,height,bodies);
this.width = width;
this.height = height;
World.add(world,this.body);

}
display(){
var pos = this.body.position; 
var angle = this.body.angle
push()
translate(pos.x,pos.y) 
rotate(angle)  
rectMode(CENTER);
fill("blue");
rect(0,0,this.width,this.height)
pop();
}
 }
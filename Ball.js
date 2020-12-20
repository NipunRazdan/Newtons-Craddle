class Bob{
 constructor(x,y){
 var options={
    isStatic:false,
    restitution:0.8,
    friction:0.5,
    density:0.3
 }
  this.bodies=Bodies.circle(x,y,30,options);
  World.add(world,this.body);

  this.body.position=body;
 }
display(){
 push();
 ellipseMode(radius);
 ellipse(body.x,body.y,30,30)
 pop();
 
}


}
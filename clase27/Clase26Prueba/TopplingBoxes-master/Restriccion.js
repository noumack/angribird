class Restriccion{
constructor(bodyA,bodyB){
    var opciones ={
      bodyA:bodyA,
      bodyB:bodyB,
      stiffness:0.04,
      length:10 
    }
this.restriccion = Constraint.create(opciones);
World.add(world,this.restriccion);
}
display(){
    var puntoA=this.restriccion.bodyA.position;
    var puntoB=this.restriccion.bodyB.position;
    push();   
    stroke("purple");
    strokeWeight(5);
    line(puntoA.x,puntoA.y,puntoB.x,puntoB.y);
    pop();
}
}
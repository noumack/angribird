class Resortera{
    constructor(bodyA,pointB){
        var opciones ={
          bodyA:bodyA,
          pointB:pointB,
          stiffness:0.04,
          length:10 
    
        }
    this.pointB = pointB;
    this.resorte = Constraint.create(opciones);
    World.add(world,this.resorte);
    this.resortera1 = loadImage('imagenes/sling1.png');
    this.resortera2 = loadImage('imagenes/sling2.png');
    this.resortera_respaldo = loadImage('imagenes/sling3.png');
    }
    display(){
        image(this.resortera1,235,120)
        image(this.resortera2,205,110)
        
        if(this.resorte.bodyA){
        var puntoA=this.resorte.bodyA.position;
        var puntoB=this.pointB;
        push();   
        stroke("#301607");
        if(puntoA.x<220){
             strokeWeight(18);
             line(puntoA.x-20,puntoA.y,puntoB.x,puntoB.y);
             line(puntoA.x-20,puntoA.y,puntoB.x+30,puntoB.y-3);
             image(this.resortera_respaldo,puntoA.x-30,puntoA.y-10,15,30)
        }
        else {
            strokeWeight(10);
            line(puntoA.x+20,puntoA.y,puntoB.x,puntoB.y);
            line(puntoA.x+20,puntoA.y,puntoB.x+30,puntoB.y-3);
            image(this.resortera_respaldo,puntoA.x+20,puntoA.y-10,15,30)
        }
        
        
        pop();
        }

    }
    
    fly(){
        this.resorte.bodyA = null
        
    }
    reset(body){
    this.resorte.bodyA = body
    }
    }
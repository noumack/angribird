class Bird extends Baseclass{
    constructor(x, y) {
      super (x,y,50,50);
      this.image = loadImage("imagenes/bird.png")
      this.smokeimagen = loadImage("imagenes/smoke.png")
      this.trayectoria = [] 


    }
    display(){
      var pos = this.body.position;
      
      super.display()
      
     
     if(this.body.velocity.x>10 && this.body.position.x>250){
      var posicion = [this.body.position.x,this.body.position.y]; 
      this.trayectoria.push(posicion);
    }

     for(var f = 0;f < this.trayectoria.length;f = f+1){
      image(this.smokeimagen,this.trayectoria[f][0],this.trayectoria[f][1])
     }
     
    }
  };
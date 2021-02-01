class box {
    constructor(posX,posY,widtha,heighta)
    {
     //level one   
     var block1,block2,block3,block4,block5,block6,block7;
     //lavel two
     var block8,block9,block10,block11,block12;
     //leavel three
     var block13,block14,block15;
     //leavel four
     var block16

     var options = {isStatic:true}
     this.body = Bodies.rectangle(posX,posY,widtha,heighta,options)
     this.width = widtha
     this.height = heighta
     World.add(world,  this.body)
    }
 
    display()
    {
    var pos = this.body.position ;
     push();
     rectMode(CENTER)
     fill("blue")
     rect(pos.x,pos.y,this.width,this.height)
     pop();
    }
 }
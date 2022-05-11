class Hielo{
    constructor(x,y){
        this.body=Bodies.rectangle(x,y,50,50)
        this.image=loadImage("Imagenes/hielo-az.png")
        
        World.add(world,this.body)

    }

    display(){
        var pos= this.body.position
        push()
        imageMode(CENTER)
        image(this.image,pos.x, pos.y, 50, 50);
        
        pop()
    }

}
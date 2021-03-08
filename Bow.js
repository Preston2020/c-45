class Bow{
    constructor(x,y,width,height, angle){
       var options = {
            isStatic: true,

        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
        Matter.Body.setAngle(this.body, angle);
        World.add(world, this.body);


    }
    display(){
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        fill('red');
    }
}
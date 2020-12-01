class Polygon {
    constructor(x,y,radius){
       this.polygon = Bodies.circle(50,200,20);

        World.add(world,this.body);

        //slingShot = new SlingShot(this.polygon, {x:100,y:200});
    }

    display(){
        var pos = this.polygon.position;
        var angle = this.polygon.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);

        noStroke();
        ellipseMode(RADIUS);
        ellipse(0,0, this.radius, this.radius);
        pop();
    }
}




class Ball{
    constructor(x, y, r){
        var options={
            isStatic: false,
            density: 1.0
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(x, y, r, options);
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill("pink");
        ellipse(pos.x, pos.y, this.r, this.r);
    }
}
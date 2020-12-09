class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.008,
            length: 5
        }
       
        this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    //throw(){
    //    this.rope.bodyA = null;
    //}

    display(){
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(6);
            stroke("white");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
        }
 
    }
    
}
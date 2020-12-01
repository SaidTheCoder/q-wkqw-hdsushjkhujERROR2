class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            friction: 1.5,
            angularStiffness:1,
            bodyA: bodyA,
            pointB: pointB,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(3);
            //line(pointA.x , pointA.y, pointB.x , pointB.y);
            pop();
            }
        }
    }
    

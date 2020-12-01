class Brick {
    constructor(x, y, width, height) {
      var options = {
          //'restitution':0.1,
          'friction':0.1,
          //'density':1.0
      }
      this.Visibity=255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("images/bricks.png")
      
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed>7){
        this.Visibility=this.Visibility-10;
         World.remove(world,this.body);
         push ();
         tint(255,this.Visibility);
         image(this.image,this.body.position.x,this.body.position.y,50,50)
         pop ();
       }
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      strokeWeight(4)
      stroke("green")
      fill("brown");
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
    score(){ 
      if (this.Visiblity < 0 && this.Visiblity > -1005){
         score++;} 
    }
  };
  
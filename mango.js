class mango{
	constructor(x,y,radius,scale ){
		var options={
			isStatic:true,
            friction :1,
			}
		this.x=x;
		this.y=y;
		this.radius = radius;
		this.scale = scale;
		this.image = loadImage("mango.png")
		this.body = Bodies.circle(this.x, this.y, this.radius, options)
		World.add(world, this.body);
	}

	display(){
		var Pos=this.body.position;	
		push()
		translate(Pos.x, Pos.y);
		rotate(this.body.angle);
		fill(255,0,255);
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.radius*2, this.radius*2)
		pop()
 }
};

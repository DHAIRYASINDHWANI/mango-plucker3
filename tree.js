 class Tree
{
	constructor(x,y)
	{
        
		this.x=x;
        this.y=y;
        
		this.dustbinWidth=450;
		this.dustbinHeight=600;
		this.wallThickness=10;
		
		this.image=loadImage("tree.png")
		this.Body1=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness)
		this.Body2=Bodies.rectangle(0, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight)
		this.Body3=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight)
		
		World.add(world, this.Body1)
		World.add(world, this.Body2)
		World.add(world, this.Body3);

	}
	display()
	{
			var pos=this.Body1.position;
			push()
			translate(pos.x, pos.y+10);
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight)
			pop()
			
	}

}


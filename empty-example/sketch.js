var allnotes;
var speed;

function setup() 
{
  createCanvas(800,800);
  allnotes = new Array();
  println(allnotes);
  speed = random(10)/10;
}

function draw() 
{
  background(250,230,230);

  
  if(allnotes)
  {

  	for(var i = 0; i < allnotes.length; i++)
  	{
  		allnotes[i].update();
  		allnotes[i].disp();
  	}

  }

}

function Note(x, y, speed)
{
	this.x = x;
	this.y = y;
	
	this.speed = speed;
	
	
	this.update = function()
	{
		move();
		checkWall();
		
	
	};

	var move = function()
	{

		x = speed + x;

	};

	var checkWall = function()
	{
		if(x > width)
		{
			x = x - width;
			
		}

	};
	
	this.disp = function() 
	{
		ellipse(x,y,10,10);
	};

	

}

function mouseClicked()
{
	var temp = new Note(mouseX, mouseY, random(10)/10);
	allnotes[allnotes.length] = temp;
	
}

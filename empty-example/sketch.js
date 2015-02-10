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
	var voice = new p5.Oscillator((random(500)+200), "tri");
	voice.amp(0.1,0);
	voice.start();
	println(voice);
	println(speed);


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
			playSound();
			x = x - width;
			
		}

	};

	var playSound = function()
	{
		voice.amp((speed * 0.5), .033);
		voice.amp(0, (speed * 2));
		//Println("Success?");

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

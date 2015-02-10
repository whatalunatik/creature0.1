var allnotes;
var speed;

function setup() 
{
  createCanvas(800,800);
  allnotes = new Array();
  println(allnotes);
  speed = (random(10)+1)/10;
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
	
	var freq = (random(500)+200);

	println(freq*(2/(speed)));

	var voice = new p5.Oscillator(freq, "sawtooth");
	var env = new p5.Env(0.005, (speed/2), (speed * 4));
	var filter = new p5.BandPass();
	
	voice.disconnect();
	voice.connect(filter);

	filter.freq(freq*(1/(speed)));
	filter.res(freq/14);
	
	voice.amp(0 , 0);
	voice.amp(env);
	

	voice.start();
	

	//println(voice);
	//println(speed);
	//println(filter);


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
		env.play();
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

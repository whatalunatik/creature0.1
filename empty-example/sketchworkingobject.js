function setup() 
{
  createCanvas(800,800);
}

function draw() 
{
  ellipse(10,10,30,30);

  var test = new Keith(300, 300, 30, 30);

  test.disp();

}

function Keith(x, y, w, h)
{
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.disp = function() {ellipse(x,y,w,h);};

}
var b1,b2
function setup() 
{
  createCanvas(400, 400);
  b1=new Box(100,100,50,50,2,-2)
  b2=new Box(200,200,80,80,-2,2)
}

function draw() 
{
  background(220);
b1.show()
b2.show()
b1.movex()
b1.movey()
b2.movex()
b2.movey()
}


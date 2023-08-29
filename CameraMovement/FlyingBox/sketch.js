planeSize = 400;
edge = 180;
xPos = 0;
yPos = 0;
zPos = 0;
xFocus = 0;
yFocus = 0;
zFocus = 1;
xKryds = 0;
zKryds = 0;
speed = 3;
rotSpeed = 1;
vinkel = 90;
vinkelOp = 0;
let cameraOffset;
let tiles;

function setup() 
{
  createCanvas(400, 400, WEBGL);
  angleMode(RADIANS);
  cameraOffset = 0;//(height/2) / tan(PI/6);
  angleMode(DEGREES);
  tiles = loadImage('tiles.jpg');
}

function draw() 
{
  background(220);
  texture(tiles);
  ambientLight(255);
  noStroke();

  myPlane(planeSize,planeSize,0,200,0,90,0,0);
  myPlane(planeSize,planeSize,0,-200,0,-90,0,0);
  myPlane(planeSize,planeSize,-200,0,0,0,90,0);
  myPlane(planeSize,planeSize,0,0,200,0,0,0);
  myPlane(planeSize,planeSize,200,0,0,0,-90,0);
  myPlane(planeSize,planeSize,0,0,-200,0,0,0);

  camera(xPos, yPos, zPos, //Position
         xPos + xFocus, yPos + yFocus, zPos + zFocus, //Focuspoint
         0, 1, 0); //UpVector

  //mySphere(1,xPos + xFocus*50, yPos + yFocus*50, zPos + zFocus*50);

  if(keyIsDown(RIGHT_ARROW))
  {
    xFocus = cos(vinkel) - (cos(vinkel)*(1-cos(vinkelOp)));
    zFocus = sin(vinkel) - (sin(vinkel)*(1-cos(vinkelOp)));
    vinkel += rotSpeed;
  }
  if(keyIsDown(LEFT_ARROW))
  {
    xFocus = cos(vinkel) - (cos(vinkel)*(1-cos(vinkelOp)));
    zFocus = sin(vinkel) - (sin(vinkel)*(1-cos(vinkelOp)));
    vinkel -= rotSpeed;
  }
  if(keyIsDown(UP_ARROW))
  {
    xFocus = cos(vinkel) - (cos(vinkel)*(1-cos(vinkelOp)));
    zFocus = sin(vinkel) - (sin(vinkel)*(1-cos(vinkelOp)));
    yFocus = sin(vinkelOp);
    vinkelOp -= rotSpeed;
  }
  if(keyIsDown(DOWN_ARROW))
  {
    xFocus = cos(vinkel) - (cos(vinkel)*(1-cos(vinkelOp)));
    zFocus = sin(vinkel) - (sin(vinkel)*(1-cos(vinkelOp)));
    yFocus = sin(vinkelOp);
    vinkelOp += rotSpeed;
  }
  if(keyIsDown(65)) //A
  {
    xKryds = cos(vinkel+90);
    zKryds = sin(vinkel+90);
    xPos -= speed * xKryds;
    zPos -= speed * zKryds;
  }
  if(keyIsDown(68)) //D
  {
    xKryds = cos(vinkel+90);
    zKryds = sin(vinkel+90);
    xPos += speed * xKryds;
    zPos += speed * zKryds;
  }
  if(keyIsDown(87)) //W
  {
    zPos += speed * zFocus;
    xPos += speed * xFocus;
    yPos += speed * yFocus;
  }
  if(keyIsDown(83)) //S
  {
    zPos -= speed * zFocus;
    xPos -= speed * xFocus;
    yPos -= speed * yFocus;
  }

}

function myPlane(w,h,x,y,z,xRot,yRot,zRot)
{
  push();
  translate(x,y,z);
  rotateX(xRot);
  rotateY(yRot);
  rotateZ(zRot);
  plane(w,h);
  pop();
}

function mySphere(r,x,y,z)
{
  push();
  translate(x,y,z);
  sphere(r);
  pop();
}

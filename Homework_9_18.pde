int value = 0;
int myx=50;
int myy=50;
int shapesize=50;
color strokecolor;
color rectColor;

void setup(){
  size(600,600);
  background(0);
  rectColor=color(255);
}

void draw() {
  fill(rectColor);
  strokecolor= color(0);
  strokeWeight(2);
  rect(myx, myy,shapesize, shapesize);
  if (mouseX>(width-100)){
    myx = myx-2;
  }
  if (mouseX<100 && mouseX>0){
    myx = myx+2;
  }
  if (mouseY>(height-100)){
    myy = myy-2;
  }
  if (mouseY<100 && mouseY>0){
    myy = myy+2;
  }

  rect(myx+200, myy+200, shapesize, shapesize);
  if (mouseX>(width-100)){
    myx = myx-2;
  }
  if (mouseX<100 && mouseX>0){
    myx = myx+2;
  }
  if (mouseY>(height-100)){
    myy = myy-2;
  }
  if (mouseY<100 && mouseY>0){
    myy = myy+2;
  }
  color mouseColor;
  mouseColor=get(mouseX,mouseY);
  if(mouseColor==rectColor){
    background(0,0,random(255));
  }
}

void mouseMoved() {
  strokecolor= color(255,0,0);
  strokeWeight(5);
  stroke(strokecolor);
  point(mouseX, mouseY);
}

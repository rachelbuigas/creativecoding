int rectX, rectY;      
int circleX, circleY;  
int rectSize = 50;    
int circleSize = 50; 

color shapeColor;
color baseColor;
color strokeColor;

boolean rectOver = false;
boolean circleOver = false;

void setup() {
  size(600, 600);
  shapeColor = color(255);
  strokeColor= color(0);
  baseColor = color(0);
  circleX = 200;
  circleY = 200;
  rectX = 50;
  rectY = 50;
}

void draw() {
  update(mouseX, mouseY);
  background(baseColor);
  noStroke();
  if (circleOver) {
    background(baseColor=color(random(255),0,0));
    //strokeColor=color(random(255),0,0);
  } else if (rectOver) {
    shapeColor=color(0,0,random(255));
  }
  if(mouseX>(width-100)){
    circleX = circleX-2;
    rectX=rectX-2;
  }
  if(mouseX<100 && mouseX>0){
    circleX = circleX+2;
    rectX=rectX+2;
  }
  if(mouseY>(height-100)){
    circleY = circleY-2;
    rectY=rectY-2;
  }
  if(mouseY<100 && mouseY>0){
    circleY = circleY+2;
    rectY=rectY+2;
  }

  stroke(255);
  strokeWeight(0);
  fill(shapeColor);
  rect(rectX, rectY, rectSize, rectSize);
  rect(rectX+200, rectY+200, rectSize, rectSize);
  rect(rectX+100, rectY+400, rectSize, rectSize);
  rect(rectX+100, rectY+520, rectSize, rectSize);


  ellipse(circleX, circleY, circleSize, circleSize);
  ellipse(circleX+400, circleY+100, circleSize, circleSize);
  ellipse(circleX+500, circleY+500, circleSize, circleSize);
  ellipse(circleX+350, circleY+450, circleSize, circleSize);

}

//void mouseMoved() {
//  stroke(strokeColor);
//  strokeWeight(5);
//  line(mouseX, mouseY, pmouseX, pmouseY);
//}

void update(int x, int y) {
  if( overCircle(circleX, circleY, circleSize) ) {
    circleOver = true;
    rectOver = false;
  } else if ( overRect(rectX, rectY, rectSize, rectSize) ) {
    rectOver = true;
    circleOver = false;
  } else {
    circleOver = rectOver = false;
  }
}

boolean overRect(int x, int y, int width, int height) {
  if (mouseX >= x && mouseX <= x+width && 
      mouseY >= y && mouseY <= y+height) {
    return true;
  } else {
    return false;
  }
}

boolean overCircle(int x, int y, int diameter) {
  float disX = x - mouseX;
  float disY = y - mouseY;
  if(sqrt(sq(disX) + sq(disY)) < diameter/2 ) {
    return true;
  } else {
    return false;
  }
}

//Rachel Buigas-Lopez and Vanda Lin

var rad1 = 180;
var rad2 = 140;
var rad3 = 70;
var num = 12;

function setup() {
    createCanvas(600, 600);
    noFill();
}

function draw() {
    background(0);
    push();
        translate(width/2, height/2);
        Mandala();
    pop();
}

function Mandala() {
    Shape2 = new Circle(12, -45, rad2, 173, 226, 254);
    var rotationY = map(mouseY, 0, 600, 0.25, 5);
    var rotationX = map(mouseX, 0, 600, 0.25, 5);


    push(); //white series of circles
    rotate(rotationY);
        Shape1 = new Circle(12, 20, rad1, 255, 255, 255);
    pop();

    push(); //series of squares
    rotate(rotationX);
        Shape3 = new Square(12, -55, rad3, 255, 253, 119);
    pop();

    //white inner circle 
    ellipse(0, 0, 60, 60);

    //red circle inner line 
    stroke(150, 0, 0);
    ellipse(0, 0, 250, 250);

    //red circle outer line 
    stroke(255, 0, 0);
    ellipse(0, 0, 400, 400);

    //blue triangle
    stroke(50, 255, 255);
    triangle(0, -50, -50, 50, 50, 50);
}

//Draw Shapes
function Circle(num, yPos, rad, colR, colG, colB) {
    for (var p = 0; p < num; p++) {
        push();
        stroke(colR, colG, colB);
        rotate(radians(p * 360 / num));
        ellipse(55 + rad / 2, yPos, rad, rad);
        pop();
    }
}

function Square(num, yPos, rad, colR, colG, colB) {
    for (var p = 0; p < num; p++) {
        push();
        stroke(colR, colG, colB);
        rotate(radians(p * 360 / num));
        rect(55 + rad / 2, yPos, rad, rad);
        pop();
    }
}
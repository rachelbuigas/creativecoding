var xPos = 0;
var xLn = 0;
var myShape1;
var myShape2;
var myShape3;
var myShape4;
var myShape5;
var myShape6;
var myShape7;

function setup() {
    kick = loadSound('assets/01_Kick.wav');
    hiHat = loadSound('assets/03_HiHat.wav');
    cymbal = loadSound('assets/07_Cymbal.wav');
    createCanvas(720, 200);
    background(255, 0, 0);
    frameRate(30);
    rectMode(CENTER);
    myShape1 = new Shape(50, 35, 25);
    myShape2 = new Shape(150, 35, 35);
    myShape3 = new Shape(250, 35, 25);
    myShape4 = new Shape(350, 35, 35);
    myShape5 = new Shape(450, 35, 25);
    myShape6 = new Shape(550, 35, 35);
    myShape7 = new Shape(650, 35, 25);

}

function draw() {
    background(255, 0, 0);


    //circles scale
    myShape1.move();
    myShape1.display();

    myShape2.move();
    myShape2.display();

    myShape3.move();
    myShape3.display();

    myShape4.move();
    myShape4.display();

    myShape5.move();
    myShape5.display();

    myShape6.move();
    myShape6.display();

    myShape7.move();
    myShape7.display();


    //lines aninmate moving horizontally
    xPos = xPos + 0.8;
    push();
    translate(xPos, 0);
    Lines(xPos);
    if (xPos > 30) {
        xPos = 0;
        hiHat.play();
    }
    pop();


    //draw line for cymbal
    stroke(0);
    if (mouseIsPressed === true) {
        line(mouseX, mouseY, pmouseX, pmouseY);
        cymbal.play();
    }
}

function Lines(xPos) {
    for (var i = 0; i < 24; i++) {
        xPos = i * 30;
        stroke(0);
        line(xPos, 70, xPos, 125);;

    }
}

function Shape(myX, myY, mySize) {
    this.x = myX;
    this.y = myY;
    this.size = mySize;
    this.sizeStep = 1;
    this.move = function() {
        //scale up and down in size
        this.size += this.sizeStep;
        if (this.size >= 40 || this.size <= 15) {
            this.sizeStep *= -1;
            // setVolume(1);
            kick.setVolume(.1, 0, 0)
            kick.play();
        }
    }

    this.display = function() {
        noFill();
        ellipse(this.x, this.y, this.size, this.size);
    }
};
var square1;
var square2;
var square3;
var square4;

function setup() {
    createCanvas(600, 600);
    background(0);
    square1 = new mySquare(200, 200, 25, 1);
    square2 = new mySquare(250, 100, 50, 2);
    square3 = new mySquare(400, 50, 75, 3);
    square4 = new mySquare(500, 500, 100, 4);
}

function draw() {
    background(0);

    square1.display();
    square2.display();
    square3.display();
    square4.display();

    square1.animate();
    square2.animate();
    square3.animate();
    square4.animate();
}

function mySquare(myX, myY, mySize, mySpeed) {
    this.x = myX;
    this.y = myY;
    this.vel = mySpeed;
    this.size = mySize;

    // Create a function as a property of the Ball class
    this.animate = function(){
        this.x += this.vel;
        this.y += this.vel;

        if(this.y>=height){
        	this.vel = random(1,5)
        }
        if(this.x>=width){
        	this.vel = random(1,5)
        }

        if(this.x <= 0 || this.x >= width){
            this.vel *= -1;
        }
        else if(this.y <= 0 || this.y >= height){
            this.vel *= -1;
        }


    }

    this.display = function(){
        fill(255);
        ellipse(this.x, this.y, this.size, this.size);
    }

};
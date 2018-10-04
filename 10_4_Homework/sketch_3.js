var rot1 = 100;
var rot2 = 100;
var rot3 = 100;

function setup() {
    createCanvas(600, 600);
    rectMode(CENTER);
}

function draw() {}

function mouseMoved() {
    background(255);
    if (mouseX > width / 2) {
        rot1 = rot1 + 5;
        rot2 = rot2 + 1;
        rot3 = rot3 + 2;
    } else {
        rot1 = rot1 - 5;
        rot2 = rot2 - 1;
        rot3 = rot3 - 2;
    }

    push();
    translate(100, 100);
    rotate(rot1);
    fill(255, 0, 0);
    rect(0, 0, 100, 100);
    pop();

    push();
    translate(250, 150);
    rotate(rot2);
    fill(0, 255, 0);
    rect(0, 0, 100, 100);
    pop();

    push();
    translate(140, 280);
    rotate(rot3);
    fill(0, 0, 255);
    rect(0, 0, 100, 100);
    pop(); 

}
var trans=150;
var rot=(0.2);

function setup() {
    createCanvas(600, 600);
}

function draw() {
    for (var i = 0; i < 3; i++) {
        push();
	        translate(trans*i+100, trans*i+50+100);
	        rotate(rot*i+1);
	        rect(0, 0, 100, 100);
        pop();
    }
}
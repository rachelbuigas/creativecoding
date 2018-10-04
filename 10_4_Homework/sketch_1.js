function setup(){
	createCanvas (600,600);
}

function draw() {	
	push();
	  	translate(50, 50);
	  	rotate(PI/8);
		fill(255, 0, 0);
	  	rect(0, 0, 100, 100);
	pop();

	push();
	  	translate(250, 150);
	  	rotate(PI/2);
		fill(0, 255, 0);
	  	rect(0, 0, 100, 100);
	pop();

	push();
	  	translate(140, 280);
	  	rotate(PI/4);
		fill(0, 0, 255);
	  	rect(0, 0, 100, 100);
	pop();
}

var myVariable;

function setup () {
	//myVariable is now an int
	myVariable = 5;
	createCanvas(500,500);
}

function draw () {

}

function mousePressed () {
	noStroke();
	fill(255,0,0);
	ellipse(mouseX, mouseY, 10, 10);
}

function mouseReleased () {
	noStroke();
	fill(0,255,0);
	rect(mouseX, mouseY, 10, 10);
}

function mouseDragged (){
	stroke(0,0,255);
	line(pmouseX,pmouseY,mouseX,mouseY)
}


// INTERACTION FUNCTIONS
// if(mouseIsPressed){

// }
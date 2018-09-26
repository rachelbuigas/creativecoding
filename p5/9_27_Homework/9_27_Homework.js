function setup () {
	createCanvas(600,500);
}

function draw () {
	if (mouseX==500){
		background(0)
	}
	else if(mouseX>(width/2)){
		background(255,0,0);
	}
	else if(mouseX<=(width/2) && mouseY>(height/3)){
		background(0,255,0);
	}
	else {
		background(0,0,255);
	}
}

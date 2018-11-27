//EXERCISE: Take text input from a DOM input element.
//Display the text as an HTML element, a canvas text object, and a console statement.

var button;
var input;
var canvas;
var p;

//Create variables for string
var inputText;
var baseOutputString;


function setup() {

	canvas = createCanvas(300,300);
	canvas.position(200,200);

	inputText = "start";

	input = createInput('What are your weekend plans?');
	input.position(50,100);
	input.style('width','400px');

	button = createButton('Submit');
	button.position(460,100);
	button.style('font-family','helvetica'); //new style
	button.style('text-transform', 'uppercase'); //new style
	button.style('font-weight','800'); //new style

	button.mousePressed(updateText);

	baseOutputString = "This weekend my plans are ";

	p = createP(inputText);
	p.position(50,150);
	p.style('font-family','helvetica'); //new style
    
}

function draw() {
	var rot = map(mouseX,0,width,0,360); //new style
	button.style('rotate', rot)
	background(200,0,0);
	text(inputText,50,50);

}

function updateText(){
	inputText = input.value();

	var totalOutput = baseOutputString + inputText;
	console.log(totalOutput);
	input.value("");

	//update the value of the 'p' element
	p.html(inputText);

}
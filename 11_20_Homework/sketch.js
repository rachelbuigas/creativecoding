var myData;

var url;
var baseUrl;
var apiKey;

var query;
var input;
var inputButton;
var result="search";

function setup() {

	baseUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
	apiKey = "a0a9de10b21a46ebb5a52257f8b7f947"; //change this to your API key!

    //INPUT ELEMENT
    input = createInput("What news are you interested in?");
    input.position(50, 200);
    input.style('width', '250px');

    //We need a button to capture the completed input text
    inputButton = createButton("Enter");
    inputButton.position(315,200);
    inputButton.mousePressed(printName);

	query = result; //article search term

	url = baseUrl + "q=" + query + "&api-key=" + apiKey;

	console.log(url);
    
}

function draw() {
  // put drawing code here
}

function gotData(myData){ //callback function from loadJSON
	console.log(myData);

	//find a specific headline
	var headline = myData.response.docs[2].headline.print_headline;
	console.log(headline);
}

function mouseClicked(){
	myData = loadJSON(url, gotData);
}

function printName(){
	var result = input.value(); //get value of text field
	console.log(result);
	input.value(""); //clear out text input so it doesn't display the last input
}
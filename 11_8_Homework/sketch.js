var myData;
var offset=100;

function preload() {
    myData = loadJSON("assets/weather.json")
}

function setup() {
    createCanvas(720, 400);
}

function draw() {
	text("Minimum Temperature in London by Date", 200, 25);
    for (var i = 0; i < myData.consolidated_weather.length; i++) {
        var date = myData.consolidated_weather[i].applicable_date;
        var temp = myData.consolidated_weather[i].min_temp;
        fill(255,0,0);
        noStroke();
        rect(i * offset, 100, 30, temp * 10);
        text(date, i * offset, 60, 50, 50);
    }
}
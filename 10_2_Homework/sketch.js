var xPos = 0;
var yPos = 0;
var xSize = 30;
var ySize = 30;
var grayVal = 0;
var counter = 1;

function setup() {
    createCanvas(800, 600);
    background(255);
}

function draw() {
	fill(0);
    noStroke();
    for (var j = 0; j < 5; j+=1) {
        xPos = j * 50;
        for (var i = 0; i < 20; i++) {
            yPos = i *40 + 10;
            if (i%2==0) {
                xPos+=25;
            }
            else {
                xPos-=25;
            }
            ellipse(xPos, yPos, xSize, ySize);
        }
        xPos+=10;
        counter=counter+1;
    }

    grayVal=0;
    for (var j = 1; j < 7; j+=1) {
        xPos = j * 50;
        fill(grayVal+j*40);
        for (var i = 0; i < 20; i++) {
            yPos = i *40 + 10;
            if (i%2==0) {
            	xPos+=25;
            }
            else {
            	xPos-=25;
            }
            ellipse(xPos+200, yPos, xSize-j*3, ySize+j/3);
        }
        xPos+=10;
        counter=counter+1;
    }

    grayVal=255;
    xSize=15;
    ySize=30;
    for (var j = 1; j < 7; j+=1) {
        xPos = j * 50;
        fill(grayVal-j*40);
        for (var i = 0; i < 20; i++) {
            yPos = i *40 + 10;
            if (i%2==0) {
                xPos+=25;
            }
            else {
                xPos-=25;
            }
            ellipse(xPos+500, yPos, xSize+j*3, ySize+j/3);
        }
        xPos+=10;
        counter=counter+1;
    }
}
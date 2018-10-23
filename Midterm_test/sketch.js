var stateIndex = 0; //variable to store the current state index
//states, backgrouds
var img0;
var img1;
var img2;
var img3;
var img4;
var img5;
var img6;

//stateZero
var bodyPlain;
var bodyBangs;
var bodyFangs;
var bodyCape;
var clothes;
var fangs;
var scissors;
var cape;
var clothesOn = 0;
var fangsOn = 0;
var scissorsOn = 0;
var capeOn = 0;

//stateOne
var bodyBath;
var bodyHair;
var bodyCheeks;
var dye;
var facePaint;
var hairOn = 0;
var cheeksOn = 0;


//stateTwo
var bodyVamp;

//stateThree
var hInd = false;
var aInd = false;


function preload() {
    //states background
    img0 = loadImage("assets/stateZero.png");
    img1 = loadImage("assets/stateOne.png");
    img2 = loadImage("assets/img-03.png");
    img3 = loadImage("assets/StateThree-2.png");
    img4 = loadImage("assets/StateThree.png");
    img5 = loadImage("assets/img-04.png");
    img6 = loadImage("assets/img-21.png");
    //stateZero
    bodyPlain = loadImage("assets/img-06.png");
    bodyBangs = loadImage("assets/img-17.png");
    bodyFangs = loadImage("assets/img-18.png");
    bodyCape = loadImage("assets/img-19.png");
    clothes = loadImage("assets/img-07.png");
    fangs = loadImage("assets/img-08.png");
    scissors = loadImage("assets/img-09.png");
    cape = loadImage("assets/img-10.png");
    //stateOne
    bodyBath = loadImage("assets/img-11.png");
    bodyHair = loadImage("assets/img-12.png");
    bodyCheeks = loadImage("assets/img-13.png");
    dye = loadImage("assets/img-14.png");
    facePaint = loadImage("assets/img-15.png");
    //stateTwo
    bodyVamp = loadImage("assets/img-16.png");
}

function setup() {
    createCanvas(img0.width / 2, img0.height / 2);
}

function draw() {

    switch (stateIndex) {
        case 0: //same as "if(stateIndex==0)"
            stateZero();
            break; //exit this case after stateZero() is finished
        case 1: //same as "else if(stateIndex == 1)"
            stateOne();
            break;
        case 2: //same as "else if(stateIndex == 1)"
            stateTwo();
            break;
        case 3: //same as "else if(stateIndex == 1)"
            stateThree();
            break;
        case 4: //same as "else if(stateIndex == 1)"
            stateFour();
            break;
        default: //default condition for any other value
            break;

    }

}

function stateZero() {
    image(img0, 0, 0, img0.width / 2, img0.height / 2);
    // load red items
    if (clothesOn != 1) {
        image(clothes, 0, 0, img0.width / 2, img0.height / 2);
    }
    if (fangsOn != 1) {
        image(fangs, 0, 0, img0.width / 2, img0.height / 2);
    }
    if (scissorsOn != 1) {
        image(scissors, 0, 0, img0.width / 2, img0.height / 2);
    }
    if (capeOn != 1) {
        image(cape, 0, 0, img0.width / 2, img0.height / 2);
    }



    //turning red items off
    if (mouseIsPressed && mouseX > 50 && mouseX < 65 && mouseY > 200 && mouseY < 300) {
        clothesOn = 1;
    }
    if (mouseIsPressed && mouseX > 403 && mouseX < 418 && mouseY > 275 && mouseY < 290) {
        fangsOn = 1;
    }
    if (mouseIsPressed && mouseX > 555 && mouseX < 570 && mouseY > 205 && mouseY < 225) {
        scissorsOn = 1;
    }
    if (mouseIsPressed && mouseX > 485 && mouseX < 535 && mouseY > 300 && mouseY < 340) {
        capeOn = 1;
    }

    //load person
    image(bodyPlain, mouseX - 50, 200, bodyPlain.width / 3, bodyPlain.height / 3);

    if (fangsOn == 1) {
        image(bodyFangs, mouseX - 50, 200, bodyPlain.width / 3, bodyPlain.height / 3);
    }

    if (scissorsOn == 1) {
        image(bodyBangs, mouseX - 50, 200, bodyPlain.width / 3, bodyPlain.height / 3);
    }
    if (capeOn == 1) {
        image(bodyCape, mouseX - 50, 200, bodyPlain.width / 3, bodyPlain.height / 3)
    }


    //open door, move to next state
    if (clothesOn == 1 && fangsOn == 1 && scissorsOn == 1 && capeOn == 1 && mouseIsPressed && mouseX > 630 && mouseX < 730 && mouseY > 160 && mouseY < 320) {
        stateIndex++;
    }


}



function stateOne() {
    image(img1, 0, 0, img0.width / 2, img0.height / 2);

    //load person
    image(bodyBath, 0, 0, img0.width / 2, img0.height / 2);

    // turning red items on and off
    if (hairOn != 1) {
        image(dye, 0, 0, img0.width / 2, img0.height / 2);
    } else {
        image(bodyHair, 0, 0, img0.width / 2, img0.height / 2);
    }
    if (cheeksOn != 1) {
        image(facePaint, 0, 0, img0.width / 2, img0.height / 2);
    } else {
        image(bodyCheeks, 0, 0, img0.width / 2, img0.height / 2);
    }
    if (mouseIsPressed && mouseX > 140 && mouseX < 190 && mouseY > 20 && mouseY < 70) {
        cheeksOn = 1;
    }
    if (mouseIsPressed && mouseX > 25 && mouseX < 65 && mouseY > 320 && mouseY < 410) {
        hairOn = 1;
    }

    //open door, move to next state
    if (hairOn == 1 && cheeksOn == 1 && mouseIsPressed && mouseX > 530 && mouseX < 630 && mouseY > 125 && mouseY < 290) {
        stateIndex++;
    }
}

function stateTwo() {
    image(img2, 0, 0, img0.width / 2, img0.height / 2);

    //load person
    image(bodyVamp, mouseX - 50, mouseY - 225, bodyPlain.width / 3, bodyPlain.height / 3);
    if (mouseIsPressed && mouseX > 700 && mouseX < 750 && mouseY > 200 && mouseY < 290) {
        stateIndex++;
    }
}

function stateThree() {
    count = frameCount % 40;
    if (count < 20) {
        image(img3, 0, 0, img0.width / 2, img0.height / 2);
    } else {
        image(img4, 0, 0, img0.width / 2, img0.height / 2);
    }
    textAlign(CENTER);
    text("Laugh along.", width / 2, 20);
    if (key === 'h' || key === 'H') {
        hInd = true;
    }
    if (key === 'a' || key === 'A') {
        aInd = true;
    }
    if (keyIsPressed && hInd == true && aInd == true) {
        stateIndex++;
    }
}

function stateFour() {
    image(img5, 0, 0, img0.width / 2, img0.height / 2);
    num=20;
    fontsize=64;
    for (var i = 0; i < num; i++) {
        push();
        translate(random(width), random(height));
        rotate(frameCount / 200.0);
        text("Halloween Nightmare", random(200), random(200));
        pop();
    }
}
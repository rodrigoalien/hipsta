function setup() {
    createCanvas(windowWidth, windowHeight);

    jogo = new Jogo();
    jogo.setup();

    somDoJogo.loop();
    frameRate(40);
}

function keyPressed() {
    jogo.keyPressed(keyCode);
}

function draw() {
    jogo.draw();
}
function setup() {
    createCanvas(windowWidth, windowHeight);

    telaInicial = new TelaInicial();

    menu = new Menu("Iniciar", width/2, height/2);

    jogo = new Jogo();
    jogo.setup();

    somDoJogo.loop();
    frameRate(40);

    cenas = {
        jogo: jogo, // ou só jogo, simplesmente
        telaInicial: telaInicial // se forem iguais, pode utilizar só um
    };
}

function keyPressed() {
    jogo.keyPressed(keyCode);
}

function draw() {
    cenas[cenaAtual].draw();
}
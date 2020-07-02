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
    cenario.exibe();
    cenario.move();

    pontuacao.exibe();
    pontuacao.adicionaPonto();

    personagem.exibe();
    personagem.aplicaGravidade();

    const inimigo = inimigos[inimigoAtual];
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.exibe();
    inimigo.move();

    if(inimigoVisivel){
        inimigoAtual++;
        if(inimigoAtual > 2){
            inimigoAtual = 0;
        }
        inimigo.velocidade = parseInt(random(10,30));
    }

    if(personagem.estaColidindo(inimigo)){
        image(imagemGameOver, width/2 -200, height/2);
        noLoop();
    }

}
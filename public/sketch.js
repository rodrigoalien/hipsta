function preload() {
    imagemCenario = loadImage("images/cenario/floresta.png");
    imagemGameOver = loadImage("images/assets/game-over.png");
    imagemPersonagem = loadImage("images/personagem/correndo.png");
    imagemInimigo = loadImage("images/inimigos/gotinha.png");
    imagemInimigoGrande = loadImage("images/inimigos/troll.png");
    imagemInimigoVoador = loadImage("images/inimigos/gotinha-voadora.png");
    somDoJogo = loadSound("sounds/trilha_jogo.mp3");
    somPulo = loadSound("sounds/somPulo.mp3");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    cenario = new Cenario(imagemCenario, 3);
    pontuacao = new Pontuacao();
    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width, 30, 52, 52, 104, 104, 10, 100);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width, 200, 100, 75, 200, 150, 10, 100);
    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 5 , 100);
 
    inimigos.push(inimigo);
    inimigos.push(inimigoGrande);
    inimigos.push(inimigoVoador);

    somDoJogo.loop();
    frameRate(40);
}

function keyPressed() {
    if(keyCode === 32 || keyCode === 38) {
        personagem.pula();
        somPulo.play();
    }
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
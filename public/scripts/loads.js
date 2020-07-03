function preload() {
    fita = loadJSON("fita/fita.json");
    imagemTelaInicial = loadImage("images/assets/telaInicial.png");
    imagemCenario = loadImage("images/cenario/floresta.png");
    imagemVida = loadImage("images/assets/coracao.png");
    imagemGameOver = loadImage("images/assets/game-over.png");
    imagemPersonagem = loadImage("images/personagem/correndo.png");
    imagemInimigo = loadImage("images/inimigos/gotinha.png");
    imagemInimigoGrande = loadImage("images/inimigos/troll.png");
    imagemInimigoVoador = loadImage("images/inimigos/gotinha-voadora.png");
    
    fonteTelaInicial = loadFont("images/assets/fonteTelaInicial.otf");

    somDoJogo = loadSound("sounds/trilha_jogo.mp3");
    somPulo = loadSound("sounds/somPulo.mp3");
}
let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let imagemInimigoGrande;

let cenario;
let personagem;
let inimigo;
let inimigoGrande;

let somDoJogo;
let somPulo;  

const matrizPersonagem = [
    [0, 0],
    [220, 0],
    [440, 0],
    [660, 0],
    [0, 270],
    [220, 270],
    [440, 270],
    [660, 270],
    [0, 540],
    [220, 540],
    [440, 540],
    [660, 540],
    [0, 810],
    [220, 810],
    [440, 810],
    [660, 810]
];

const matrizInimigo = [
    [0, 0],
    [104, 0],
    [208, 0],
    [312, 0],
    [0, 104],
    [104, 104],
    [208, 104],
    [312, 104],
    [0, 208],
    [104, 208],
    [208, 208],
    [312, 208],
    [0, 312],
    [104, 312],
    [208, 312],
    [312, 312],
    [0, 416],
    [104, 416],
    [208, 416],
    [312, 416],
    [0, 520],
    [104, 520],
    [208, 520],
    [312, 520],
    [0, 624],
    [104, 624],
    [208, 624],
    [312, 624]
];

const matrizInimigoGrande = [
    [0,0],
    [400,0],
    [800,0],
    [1200,0],
    [1600,0],
    [0,400],
    [400,400],
    [800,400],
    [1200, 400],
    [1600, 400],
    [0,800],
    [400, 800],
    [800, 800],
    [1200, 800],
    [1600, 800],
    [0, 1200],
    [400, 1200],
    [800, 1200],
    [1200, 1200],
    [1600, 1200], 
    [0, 1600],
    [400, 1600],
    [800, 1600],
    [1200, 1600],
    [1600, 1600],
    [0, 2000],
    [400, 2000],
    [800, 2000],
];

function preload() {
    imagemCenario = loadImage("images/cenario/floresta.png");
    imagemPersonagem = loadImage("images/personagem/correndo.png");
    imagemInimigo = loadImage("images/inimigos/gotinha.png");
    imagemInimigoGrande = loadImage("images/inimigos/troll.png");
    somDoJogo = loadSound("sounds/trilha_jogo.mp3");
    somPulo = loadSound("sounds/somPulo.mp3");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    cenario = new Cenario(imagemCenario, 3);
    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
    inimigo = new Inimigo(matrizInimigo, imagemInimigo, width, 30, 52, 52, 104, 104);
    inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width-200, 0, 200, 200, 400, 400);
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

    personagem.exibe();
    personagem.aplicaGravidade();

    inimigo.exibe();
    inimigo.move();

    inimigoGrande.exibe();
    inimigoGrande.move();

    if(personagem.estaColidindo(inimigo)){
        console.log("Colidiu!");
        noLoop();
    }
}
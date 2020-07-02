class Jogo {
    constructor(){
        this.inimigoAtual = 0;
    }

    setup() {
        cenario = new Cenario(imagemCenario, 3);
        pontuacao = new Pontuacao();
        personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
        const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width, 30, 52, 52, 104, 104, 10, 100);
        const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width, 200, 100, 75, 200, 150, 10, 100);
        const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 5 , 100);
     
        inimigos.push(inimigo);
        inimigos.push(inimigoGrande);
        inimigos.push(inimigoVoador);
    }

    keyPressed(keyCode) {
        if(keyCode === 32 || keyCode === 38) {
            personagem.pula();
            somPulo.play();
        }
    }

    draw(){

        cenario.exibe();
        cenario.move();
    
        pontuacao.exibe();
        pontuacao.adicionaPonto();
    
        personagem.exibe();
        personagem.aplicaGravidade();
    
        const inimigo = inimigos[this.inimigoAtual];
        const inimigoVisivel = inimigo.x < -inimigo.largura;
    
        inimigo.exibe();
        inimigo.move();
    
        if(inimigoVisivel){
            this.inimigoAtual++;
            if(this.inimigoAtual > 2){
                this.inimigoAtual = 0;
            }
            inimigo.velocidade = parseInt(random(10,30));
        }
    
        if(personagem.estaColidindo(inimigo)){
            image(imagemGameOver, width/2 -200, height/2);
            noLoop();
        }
    }

}
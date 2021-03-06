class Jogo {
    constructor(){
        this.indice = 0;
        this.mapa = fita.mapa;
        this.vidaMaxima = fita.configuracoes.vidaMaxima;
        this.vidaInicial = fita.configuracoes.vidaInicial;
        
    }

    setup() {
        cenario = new Cenario(imagemCenario, 3);
        pontuacao = new Pontuacao();
        vida = new Vida(this.vidaMaxima, this.vidaInicial);

        personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
        const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width, 30, 52, 52, 104, 104, 10);
        const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width, 200, 100, 75, 200, 150, 10);
        const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 5);
     
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

        vida.draw();
    
        pontuacao.exibe();
        pontuacao.adicionaPonto();
    
        personagem.exibe();
        personagem.aplicaGravidade();
        
        const linhaAtual = this.mapa[this.indice];
        const inimigo = inimigos[linhaAtual.inimigo];
        const inimigoVisivel = inimigo.x < -inimigo.largura;
    
        inimigo.velocidade = linhaAtual.velocidade;

        inimigo.exibe();
        inimigo.move();
    
        if(inimigoVisivel){
            this.indice++;
            inimigo.reaparece();
            if(this.indice > this.mapa.length -1){
                this.indice = 0;
            }
            
        }
    
        if(personagem.estaColidindo(inimigo)) {

            vida.perdeVida();
            personagem.tornarInvencivel();

            if(vida.vidas === 0) {
                image(imagemGameOver, width/2 -200, height/2);
                noLoop();
            }
    
        }
    }

}
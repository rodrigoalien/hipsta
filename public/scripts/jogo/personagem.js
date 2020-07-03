class Personagem extends Animacao {

    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
      super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);

      this.variacaoY = variacaoY;
      this.yInicial = height - this.altura -this.variacaoY;
      this.y = this.yInicial;

      this.velocidadePulo = 0;
      this.gravidade = 3;
      this.alturaDoPulo = -50;
      this.pulos = 0;
      this.invencivel = false;
    }

    pula() {
      if(this.pulos < 2) {
        this.velocidadePulo = this.alturaDoPulo;
        this.pulos++;
      }
    }

    aplicaGravidade() {
      this.y = this.y + this.velocidadePulo;
      this.velocidadePulo = this.velocidadePulo + this.gravidade;

      if(this.y > this.yInicial) {
        this.y = this.yInicial;
        this.pulos = 0;
      }
    }

    tornarInvencivel() {
      this.invencivel = true;
      setTimeout(() => {
        this.invencivel = false
      }, 1500);
    }

    estaColidindo(inimigo) {
      const precisao = 0.7;
      // noFill();
      // rect(this.x, this.y, this.largura * precisao, this.altura * precisao);
      // rect(inimigo.x, inimigo.y, inimigo.largura * precisao, inimigo.altura * precisao);
      
      if(this.invencivel) {
        return false;
      }

      const colisao = collideRectRect(this.x, this.y,
        this.largura * precisao, this.altura * precisao,
        inimigo.x, inimigo.y, inimigo.largura * precisao,
        inimigo.altura * precisao);
      
      return colisao;
    }
    
  }
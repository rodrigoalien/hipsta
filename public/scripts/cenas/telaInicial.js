class TelaInicial {
    constructor(){

    }

    draw(){
        this._imagemDeFundo();
        this._texto();
        this._menu();
    }

    _imagemDeFundo(){
        image(imagemTelaInicial, 0, 0, width, height);
    }

    _texto(){

        textFont(fonteTelaInicial);
        textAlign(CENTER);
        textSize(50);
        text("As Aventuras da", width/2, height/5);
        textSize(150);
        text("Hipsta", width / 2, height / 5 * 2);
    }

    _menu(){
        menu.draw();
    }

}
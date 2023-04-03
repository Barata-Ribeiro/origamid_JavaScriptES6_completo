const btn = {
    get tamanho() {
        // Se a pessoa não setar o tamanho manualmente
        // irá retornar 100.
        return this._numero || 100;
    },
    set tamanho(numero) {
        this._numero = numero * 200;
    },
};

const matematica = {
    // A pessoa não pode modificar os valores dentro de get
    get PI() {
        return 3.14;
    },
};

const frutas = {
    lista: [],
    set nova(fruta) {
        this.lista.push(fruta);
    },
};

frutas.nova = 'Banana';
frutas.nova = 'Morango';

class Btn {
    constructor(text, color) {
        this.text = text;
        this.color = color;
    }
    // Com 'get' não é possível mudar as informações
    get element() {
        // O type irá permitir que caso não sete um tipo de botão
        // manualmente, irá setar para o tipo 'button' automaticamente
        const type = this._elementType || 'button';
        const btnElement = document.createElement(type);
        btnElement.innerText = this.text;
        btnElement.style.color = this.color;
        return btnElement;
    }
    // A partir do momento que for escolhido um tipo para o botão
    // o elemento em set irá substituir o tipo dentro de get
    // caso contrário, ele irá ser apenas do tipo 'button'
    set element(type) {
        this._elementType = type;
    }
}

// Irá criar um novo botão apenas setando os parâmetros
// a serem usados no texto e estilo do botão
const blueBtn = new Btn('Comprar', 'Blue');

// Função construtora que recebe text e background
function Button(text, background) {
    this.text = text;
    this.background = background;
}

// Dentro do prototype de button...
Button.prototype.element = function () {
    // Cria um element button
    const btnElement = document.createElement('button');
    // Seta o innerText do btnElement para o text
    // da função construtora.
    btnElement.innerText = this.text;
    // Seta o innerBackground do btnElement para o background
    // da função construtora.
    btnElement.style.background = this.background;
    // retorna o botão
    return btnElement;
};

// AGORA FAREMOS USANDO CLASSES!!

// Criamos a classe button que funciona como função construtora
class Button {
    // com constructor passamos os parâmetros necessários
    constructor(text, background, color) {
        this.text = text;
        this.background = background;
        this.color = color;
    }
    // Método element
    element() {
        // Criamos o button
        const btnElement = document.createElement('button');
        // Setamos as propriedades do element
        // para o this, ou seja, o que está no objeto
        btnElement.innerText = this.text;
        btnElement.style.background = this.background;
        btnElement.style.color = this.color;
        // Retornamos o element
        return btnElement;
    }
    // Método para colocar o botão no target
    appendTo(target) {
        // Selecionamos o target com querySelector
        const targetElement = document.querySelector(target);
        // Utilizamos appendChild e selecionamos o element
        // que contém o botão.
        // 'this' é o objeto com suas propriedades
        // 'this.element()' acessamos o método element do objeto
        targetElement.appendChild(this.element());
        return targetElement;
    }
    // Usando static, iremos criar nesse caso, um botão que será
    // sempre azul, com texto branco. Precisando apenas passar
    // o texto que irá possuir.
    static blueBtn(text) {
        return new Button(text, 'blue', 'white');
    }
}

// Aqui passamos o text que irá preencher o botão
const blueButton = Button.blueBtn('Comprar');

// Criando um novo botão usando a função construtora
// com os parâmetros comprar e blue
// const blueBtn = new Button('Comprar', 'blue', 'white');

console.log(blueBtn.appendTo('body'));

// Forma mais simplificada, pois podemos passar
// qualquer valor dentro de uma propriedade.

class Button {
    constructor(options) {
        this.options = options;
    }
    static createBtn(text, background) {
        const btnElement = document.createElement('button');
        // OBS!! O text e background aqui estão falando com parâmetro
        // de dentro de createBtn, NÃO do constructor, NÃO USA THIS
        btnElement.innerText = text;
        btnElement.style.background = background;
        return btnElement;
    }
}

const blueOptions = {
    backgroundColor: 'blue',
    color: 'white',
    text: 'Clique',
    borderRadius: '4px',
};

const blueBtn = new Button(blueOptions);
// Isso não é um objeto do tipo button
// mas apenas o retorno de createBtn
const blueBtnStatic = Button.createBtn('Clique', 'blue');
console.log(blueBtnStatic);

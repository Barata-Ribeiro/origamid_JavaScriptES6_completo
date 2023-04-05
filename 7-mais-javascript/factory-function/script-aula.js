// FACTORY FUNCTION
function createButton(text) {
    // Se não retornar, você não tem acesso
    // Mas não confunda com isso ser algo relacionado a guardar senhas
    // Não é!
    const numeroSecreto = '23423854395';
    // Por exemplo, uma função que seja responsável por converter
    // string para número internamente, não faz sentido expor ela

    function element() {
        const buttonElement = document.createElement('button');
        buttonElement.innerText = text;
        return buttonElement;
    }

    // "Podemos impedir que os métodos e propriedades sejam modificados, por Douglas Crockford."
    return Object.freeze({
        element,
        text,
    });
}

const btnComprar = createButton('Comprar');
const btnVender = createButton('Vender');
console.log(btnComprar, btnVender);

// ---------------------- //

function Pessoa(nome) {
    // ou: (!(this instanceof Pessoa))
    if (!new.target) return new Pessoa(nome);
    this.nome = nome;
}

Pessoa.prototype.andar = function () {
    return `${this.nome} andou`;
};

const designer = Pessoa('João');
console.log(designer);

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.abracar = function () {
        return this.nome + ' abraçou.';
    };
    this.andar = function () {
        return this.nome + ' andou.';
    };
}
Pessoa.prototype.andar = function () {
    return this.nome + ' andou...';
};
Pessoa.prototype.nadar = function () {
    return this.nome + ' nadou...';
};
const joao = new Pessoa('João', 27);

// console.log(Pessoa.prototype);

const pais = 'Brasil';
const cidade = new String('Rio');

pais.charAt(0);
cidade.charAt(0);

const listaAnimais = ['Cachorro', 'Gato', 'Cavalo'];

const lista = document.querySelectorAll('li');
const listaArray1 = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista);

const carro = {
    marca: 'Ford',
    preco: 2000,
    andar() {
        return true;
    },
};

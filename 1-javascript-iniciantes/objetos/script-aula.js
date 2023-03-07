var pessoa = {
    nome: 'João',
    idade: 27,
    profissao: 'Designer',
    possuiFaculdade: true,
};
console.log(pessoa.idade);

var quadrado = {
    lados: 4,
    area(lado) {
        return lado * lado;
    },
    perimetro(lado) {
        return this.lados * lado;
    },
    cinco() {
        return 5;
    },
};
console.log(quadrado.area(5), quadrado.perimetro(6), quadrado.cinco());

console.log(Math.random(), Math.PI);

var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
    metadeHeight() {
        return this.height / 2;
    },
};

menu.backgroundColor = '#000';
menu.color = '#354896';
var bg = menu.backgroundColor;

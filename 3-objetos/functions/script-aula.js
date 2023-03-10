// const perimetro = new Function('lado', 'return lado * 4'); // Funções nunca serão criadas dessa maneira embora seja possível

// function somar(n1, n2) {
//     return n1 + n2;
// }

// console.log(somar.name.toUpperCase()); //O que importa é o que retorna

// ------------------- //

// function darOi(nome, idade) {
//     console.log('Oi para você, ' + nome + idade);
// }
// darOi.call({}, 'João', 27);

// ----------------------- //

// window.marca = 'Carro'; // Isso é errado fazer, apenas para fins demonstrativos
// window.ano = '2023'; // Isso é errado fazer, apenas para fins demonstrativos

// function descricaoCarro(velocidade) {
//     console.log(this); // This faz referencia ao window
//     console.log(this.marca + ' ' + this.ano + ' ' + velocidade);
// }

// descricaoCarro.call({ marca: 'Honda', ano: '2015' }, 100);

// ------------------------ //

// const carros = ['Ford', 'Fiat', 'VW'];
// const frutas = ['Banana', 'Uva', 'Pera'];

// carros.forEach.call(carros, (item) => {
//     console.log(item); //
// });

// ------------------------ //

// function Dom(seletor) {
//     this.element = document.querySelector(seletor);
// }

// Dom.prototype.ativo = function (classe) {
//     console.log(this);
//     this.element.classList.add(classe);
// };

// const li = {
//     element: document.querySelector('li'),
// };

// Dom.prototype.ativo.call(li, 'ativar');

// const ul = new Dom('ul');

// ul.ativo.call(li,'ativo');
// ul.ativo('ativo');

// console.log(ul);

// ---------------------- //

// const frutas = ['Uva', 'Maçã', 'Banana'];

// // Array.prototype.pop.call(frutas); // Farão mesma coisa
// // frutas.pop(); // Farão mesma coisa

// const arrayLike = {
//     0: 'Item 1',
//     1: 'Item 2',
//     2: 'Item 3',
//     length: 3,
// };

// const li = document.querySelectorAll('li');
// const arrayLi = Array.from(li);

// const filtro = Array.prototype.filter.bind(li, (item) => {
//     return item.classList.contains('ativo');
// });
// console.log(filtro());

// console.log(li);

// const numeros = ['14', '23', '32', '45', '53', '62', '74'];

// const $ = document.querySelectorAll.bind(document);

// ------------------------ //

const carro = {
    marca: 'Ford',
    ano: 2018,
    acelerar: function (aceleracao, tempo) {
        return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
    },
};

const honda = {
    marca: 'Honda',
};

const acelerarHonda = carro.acelerar.bind(honda);
console.log(acelerarHonda(300, 20));

console.log(carro);

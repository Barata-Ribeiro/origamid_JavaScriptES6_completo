// const pessoa = new Object({
//     nome: 'João',
// });
// console.log(pessoa);

// const carro = {
//     // marca: 'Marca', // Não é necessário sentar no protótipo
//     rodas: 4,
//     init(valor) {
//         this.marca = valor;
//         return this; // Retorna o obj não o valor, caso contrário daria error
//     },
//     acelerar() {
//         return this.marca + ' acelerou...';
//     },
//     buzinar() {
//         return this.marca + ' buzinou...';
//     },
// };

// const honda = Object.create(carro).init('Honda');
// // honda.marca = 'Honda'; // Ele não mudou o 'marca' do prototipo
// console.log(honda.buzinar());

// const ferrari = Object.create(carro).init('Ferrari');
// console.log(ferrari.acelerar());

// const funcaoAutomovel = {
//     acelerar() {
//         return 'acelerou...';
//     },
//     buzinar() {
//         return 'buzinou...';
//     },
// };

// const moto = {
//     rodas: 2,
//     capacate: true,
//     init(valor) {
//         this.marca = valor;
//         return this; // Retorna o obj não o valor, caso contrário daria error
//     },
// };
// Object.assign(moto, funcaoAutomovel);
// console.log(moto);

// const harley = Object.create(moto).init('Harley Davidson');
// console.log(`${harley.marca}`, harley.acelerar());

// const moto = {
//     capacete: true,
// };

// Object.defineProperties(moto, {
//     rodas: {
//         enumerable: true,
//         // value: 2, // não se usa com get, set
//         get() {
//             return this._rodas;
//         },
//         set(valor) {
//             this._rodas = valor * 4 + ' total rodas.';
//         },
//     },
// });
// moto.rodas = 5; // Não é possível modificar propriedade quando configurable = false, que é padrão
// moto.rodas = 3; // Se writable = true, é possível mudar a propriedade, que é padrão
// console.log(moto.rodas);

// const innerHeightConfig = Object.getOwnPropertyDescriptor(
//     window,
//     'innerHeight'
// );

// referencia: Object.getOwnPropertyNames(Array);
// ['length', 'name', 'prototype', 'isArray', 'from', 'of']

// const frutas = ['Banana'];
// Ambos são exatamente igual \/ \/ \/
// console.log(Object.getPrototypeOf(frutas));
// console.log(Array.prototype);

// const frutas1 = ['Banana', 'Pêra'];
// const frutas2 = ['Banana', 'Pêra'];

// const novaFruta = frutas1;

// console.log(Object.is(frutas1, frutas2)); // false pois são diferentes mesmo tendo a array igual
// console.log(Object.is(frutas1, novaFruta)); // true, pois novaFruta está apenas fazendo referencia a frutas1, ainda que seja uma nova variável

// const carro = {
//     marca: 'Ford',
//     ano: 2018,
// };

// Object.seal(carro); // Não permite adicionar novas propriedades e/ou modificações
// carro.portas = 4;

// Object.freeze(carro); // Não permite mudar a marca
// carro.marca = 'Honda';

// Object.preventExtensions(carro); // Permite que propriedades sejam deletadas mas previne a adição de novas propriedades.
// delete carro.marca;

// console.log(carro);
// console.log(Object.isFrozen(carro)); // false
// console.log(Object.isSealed(carro)); // false
// console.log(Object.isExtensible(carro)); // true por padrão

// const frutas = ['Banana', 'Pera', 'Maçã', 'Uva'];
// console.log(frutas.toString()); // retorna Banana,Pera,Maçã,Uva

// const frase = 'Oi frase';
// console.log(frase.toString()); // retorna ela mesma

// const funcao = function (a, b) {
//     return a + b;
// };
// console.log(funcao.toString()); // retorna a funcao toda em forma de string

// const carro = {
//     marca: 'Ford',
// };
// console.log(carro.toString()); // retorna object Object. objeto do tipo Objeto

// console.log(Object.prototype.toString.call(carro));

// -------------------------- //
// EXEMPLOS DO PROFESSOR //

const frutas = ['Banana', 'Uva'];
frutas.toString(); // 'Banana,Uva'
typeof frutas; // object
Object.prototype.toString.call(frutas); // [object Array]

const frase = 'Uma String';
frase.toString(); // 'Uma String'
typeof frase; // string
Object.prototype.toString.call(frase); // [object String]

const carro = { marca: 'Ford' };
carro.toString(); // [object Object]
typeof carro; // object
Object.prototype.toString.call(carro); // [object Object]

const li = document.querySelectorAll('li');
typeof li; // object
Object.prototype.toString.call(li); // [object NodeList]

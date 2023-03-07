// const comida = 'Pizza';
// const agua = new String('Água ');

// console.log(comida.length, agua.length);

// const frase = 'A melhor comida';
// console.log(frase[frase.length - 1]);

// const linguagem = 'JavaScript';
// console.log(linguagem.charAt(2), linguagem.charAt(linguagem.length - 1));

const frase = 'A melhor linguagem é ';
const linguagem = 'JavaScript';

const fraseFinal = frase.concat(linguagem, '!! ', 'Oláaáaaaa');

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

console.log(fruta.includes(listaFrutas)); //false
console.log(listaFrutas.includes(fruta)); //true
console.log(listaFrutas.includes(fruta, 14)); //false
console.log(fruta.startsWith('Ba')); //true
console.log(fruta.endsWith('na')); //true
console.log(fruta.startsWith('ba')); //false -- case sensitive

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

console.log(transacao1.slice(0, 3)); //Dep
console.log(transacao1.slice(10)); // e cliente
console.log(transacao1.slice(0, -2)); // corta os 2 últimos caracteres

console.log(fruta.indexOf('B')); // primeiro item 0
console.log(fruta.indexOf('n')); // segundo item 2
console.log(fruta.lastIndexOf('n')); // quarto item 4, é o ultimo index que aparece

const preco = 'R$ 99,00';

const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((preco) => {
    console.log(preco.padStart(10, '-'));
});

const frase2 = 'Ta';

console.log(frase2.repeat(5)); // TaTaTaTaTa

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ');
// listaItens = listaItens.replace(' ', ', '); //só primeiro item

console.log(listaItens);

const arrayLista = listaItens.split(', ');
console.log(arrayLista);

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const novoHtml = htmlArray.join('section');

console.log(htmlText);
console.log(htmlArray);
console.log(novoHtml);

// const frutasArray = ['Banana', 'Melancia', 'Laranja'];

const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

console.log(sexo3.toLowerCase() === 'feminino'); // true
console.log(sexo3.toUpperCase() === 'FEMININO'); // true

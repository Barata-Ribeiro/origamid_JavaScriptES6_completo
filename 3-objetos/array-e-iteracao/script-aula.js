// const carros = ['Ford', 'Fiat', 'Honda'];

// carros.forEach((item, index, array) => {
//     // array[index] = 'teste'; // altera toda a array
//     console.log(item.toUpperCase(), index, array);
// });

// const li = document.querySelectorAll('li');

// li.forEach((i, index) => i.classList.add('ativa' + index)); // Não precisa das chaves

// const retornoForEach = li.forEach((item) => {
//     item.classList.add('ativa');
// }); // sempre retorna undefined por usar o forEach dentro da variável

// const carros = ['Ford', 'Fiat', 'Honda'];
// const novaArray = carros.map((item, index, array) => {
//     // console.log(item.toUpperCase(), index, array);
//     return item.toUpperCase();
// });

// console.log(novaArray);

// const numeros = [2, 5, 6, 7, 56, 144];
// const numerosX2 = numeros.map((n) => n * 2);

// console.log(numerosX2);

// const aulas = [
//     {
//         nome: 'HTML 1',
//         min: 15,
//     },
//     {
//         nome: 'HTML 2',
//         min: 10,
//     },
//     {
//         nome: 'CSS 1',
//         min: 20,
//     },
//     {
//         nome: 'JS 1',
//         min: 25,
//     },
// ];

// const tempoAulas = aulas.map((aula) => aula.min);
// console.log(tempoAulas);

// // function nomeAulas(aula) {
// //     return aula.nome;
// // }

// const nomeAulas = (aula) => aula.nome;
// // const nomeAulas2 = function (aula) {
// //     return aula.nome;
// // }  // Funciona como o mesmo de cima

// const arrayNomeAulas = aulas.map(nomeAulas);
// console.log(arrayNomeAulas);

// const aulas = [10, 25, 30];
// const reduceAulas = aulas.reduce((acumulador, item) => {
//     return acumulador + item;
// }, 0);

// console.log(reduceAulas); // 65

// const numeros = [10, 60, 23, 52, 7, 8, 1, 5, 46];

// const maiorNumero = numeros.reduce(
//     (anterior, atual) => (anterior > atual ? anterior : atual),
//     0
// );

// console.log(maiorNumero);

// const aulas = [
//     {
//         nome: 'HTML 1',
//         min: 15,
//     },
//     {
//         nome: 'HTML 2',
//         min: 10,
//     },
//     {
//         nome: 'CSS 1',
//         min: 20,
//     },
//     {
//         nome: 'JS 1',
//         min: 25,
//     },
// ];

// const listaAulas = aulas.reduce((acumulador, atual, index) => {
//     acumulador[index] = atual.nome;
//     return acumulador;
// }, {}); // São retornados outros valors em vez de números

// console.log(listaAulas);

const frutas = ['Banana', 'Pêra', 'Uva'];

const temUva = frutas.some((item) => {
    return item === 'Uva';
}); // Retorna true pois encontra a Uva

const every = frutas.every((fruta) => {
    return fruta;
}); // Retorna true pois string com algum conteúdo é true

const indexUva = frutas.findIndex((item) => {
    return item === 'Uva';
});
console.log('Index: ', indexUva);

console.log(every);

const numeros = [6, 43, 22, 88, 101, 29];
const maiorQue3 = numeros.every((n) => n > 3);

console.log(maiorQue3);

const frutas2 = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];

const arrayFrutas = frutas2.filter((fruta) => {
    return fruta; // Ele não está encontrando as frutas, mas os valores que são true.
});

console.log(arrayFrutas);

const aulas = [
    {
        nome: 'HTML 1',
        min: 15,
    },
    {
        nome: 'HTML 2',
        min: 10,
    },
    {
        nome: 'CSS 1',
        min: 20,
    },
    {
        nome: 'JS 1',
        min: 25,
    },
];

const maiores15 = aulas.filter((aula) => {
    return aula.min >= 15;
});
console.log(maiores15);

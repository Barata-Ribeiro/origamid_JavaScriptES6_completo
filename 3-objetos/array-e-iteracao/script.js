// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll('.curso');
const cursosArray = Array.from(cursos); // Cria array de cursos

const objCursos = cursosArray.map((curso) => {
    const titulo = curso.querySelector('h1').innerText;
    const descricao = curso.querySelector('p').innerText;
    const aulas = curso.querySelector('.aulas').innerText;
    const horas = curso.querySelector('.horas').innerText;
    return {
        titulo,
        descricao,
        aulas,
        horas,
    };
});
console.log(objCursos);

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const numerosMaiores = numeros.filter((n) => n > 100);
console.log(numerosMaiores);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado'];
const buscaInst = instrumentos.some((i) => {
    return i === 'Baixo';
});
console.log(buscaInst);

// Retorne o valor total das compras
const compras = [
    {
        item: 'Banana',
        preco: 'R$ 4,99',
    },
    {
        item: 'Ovo',
        preco: 'R$ 2,99',
    },
    {
        item: 'Carne',
        preco: 'R$ 25,49',
    },
    {
        item: 'Refrigerante',
        preco: 'R$ 5,35',
    },
    {
        item: 'Quejo',
        preco: 'R$ 10,60',
    },
];

const valorTotal = compras.reduce((total, compra) => {
    const precoLimpo = +compra.preco.replace('R$ ', '').replace(',', '.');
    return total + precoLimpo;
}, 0);

console.log(
    'Total: ',
    valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
);

// ESSE TAMBÉM FUNCIONA!!! O DE CIMA É A ALTERNATIVA MAIS CURTA
// const valorCompras = compras.map((c) => {
//     c = +c.preco.replace('R$ ', '').replace(',', '.');
//     return c;
// });

// let valorTotal = 0;
// valorCompras.forEach((c) => (valorTotal += c));

// console.log(
//     valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
// );

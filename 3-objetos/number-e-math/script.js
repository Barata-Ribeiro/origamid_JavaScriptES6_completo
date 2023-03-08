// Retorne um número aleatório
// entre 1050 e 2000
const random = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050);
console.log(random);

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const arrayNumbers = numeros.split(', ');
console.log(Math.max(...arrayNumbers));

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230  ', 'r$  200'];

// function para limpar a array e transformar em números
function cleanPrices(price) {
    price = +price.toUpperCase().trim().replace('R$', '').replace(',', '.');
    price = Math.round(price);
    return price;
}

// loop para somar os preços
let total = 0;
listaPrecos.forEach((i) => {
    total += cleanPrices(i);
});

// console log para transformar a soma total na moeda escolhida
console.log(
    total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
);

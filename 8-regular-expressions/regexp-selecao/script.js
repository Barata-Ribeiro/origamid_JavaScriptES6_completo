const frase = 'JavaScript';
const regexp = /J/;
const fraseNova = frase.replace(regexp, 'B');

console.log(fraseNova);

// ---------------------------- //

const regexp2 = /Java/;
console.log('JavaScript'.replace(regexp2, 'Type')); // 'TypeScript'

// Procura: - ou .
const regexp3 = /[-.]/g;

console.log('111.222-333-44'.replace(regexp, '')); // 11122233344

// ---------------------------- //

// Busca por itens de a à z
const regexp4 = /[a-z]/g;

console.log('JavaScript é a linguagem.'.replace(regexp, '0'));
// J000S00000 é 0 000000000.

// Busca por itens de a à z e A à Z
const regexp5 = /[a-zA-Z]/g;

console.log('JavaScript é a linguagem.'.replace(regexp, '1'));
// 1111111111 é 1 111111111.

// Busca por números de 0 à 9
const regexpNumero = /[0-9]/g;

console.log('123.333.333-33'.replace(regexpNumero, 'X'));
// XXX.XXX.XXX-XX

// TODO O RESTO ESTÁ NA DOCUMENTAÇÃO DO CURSO...

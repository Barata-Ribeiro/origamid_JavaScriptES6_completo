// Declare uma variável contendo uma string
var cidade = 'Resende';
// Declare uma variável contendo um número dentro de uma string
var habitantes = '100000';
// Declare uma variável com a sua idade
var idade = 27;
// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var nome = 'João',
    sobreNome = 'Mendes';
// var nomeCompleto = nome + ' ' + sobreNome;
var nomeCompleto = `${nome} ${sobreNome}`;
// Coloque a seguinte frase em uma variável: It's time
var frase = "It's time";
// Verifique o tipo da variável que contém o seu nome
console.log(typeof nome);

console.log(cidade, habitantes, idade, nomeCompleto, frase);

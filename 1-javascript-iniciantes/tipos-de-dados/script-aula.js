var idade = 27;
var simbolo = Symbol();
console.log(typeof simbolo);

var nome = 'João';
var sobreNome = 'Mendes';
var nomeCompleto = nome + ' ' + sobreNome;
console.log(nomeCompleto);

// var gols = 1000;
// var frase = 'Romário fez ' + gols + ' gols';
// console.log(frase);

var ano = '2023';
var mes = 2;
console.log(ano + mes);

var gols = 1000;
var frase1 = 'Romário fez ' + gols + ' gols';
console.log(frase1);
var frase2 = `Romário fez ${gols * 2} gols`;
console.log(frase2);
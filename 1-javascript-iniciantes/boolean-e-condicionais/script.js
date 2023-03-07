// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var idade = 27;
var idadeParente = 59;

if (idade > idadeParente) {
    console.log('Sua idade é maior do que a do seu parente');
} else if (idade === idadeParente) {
    console.log('Sua idade é igual a do seu parente');
} else {
    console.log('Sua idade é menor que a do seu parente');
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - ' ' && 5 - 2;
console.log(expressao);
// verdadeiro

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(
    !!nome,
    !!idade,
    !!possuiDoutorado,
    !!empregoFuturo,
    !!dinheiroNaConta
);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
if (brasil === china) {
    console.log('Brasil tem população igual a da china');
} else if (brasil > china) {
    console.log('Brasil tem população maior que da China.');
} else {
    console.log('Brasil possui uma população menor que a da China.');
}
// O que irá aparecer no console?
if ('Gato' === 'gato' && 5 > 2) {
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}
// Falso

// O que irá aparecer no console?
if ('Gato' === 'gato' || 5 > 2) {
    console.log('Gato' && 'Cão');
} else {
    console.log('Falso');
}
// Verdadeiro, mostrando Cão

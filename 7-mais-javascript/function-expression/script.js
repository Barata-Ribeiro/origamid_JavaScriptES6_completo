// Remova o erro
const priceNumber = (n) => +n.replace('R$', '').replace(',', '.');
console.log(priceNumber('R$ 99,99'));
// Apenas mudei o console log de lugar, que estava antes da function expression

// Crie uma IIFE e isole o escopo
// de qualquer código JS.
(() => {
    const soma = 25 + Math.random();
    console.log(soma);
})();

// Como podemos utilizar
// a função abaixo.
const active = (callback) => callback();
// Está chamando e ativando o callback
// Não é comum no mundo real...
active(function () {
    console.log('Teste de active');
});

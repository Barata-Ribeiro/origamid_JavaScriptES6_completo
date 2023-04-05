function somar(a, b) {
    return a + b;
}
console.log(somar(4, 5));

const multiplicar = function (a, b) {
    return a * b;
};
console.log(multiplicar(3, 2));

// DECLARAR uma função da seguinte maneira
// pode entrar em conflito com métodos do objeto
// window ou até mesmo o código de outra pessoa.
function dividir(a, b) {
    return a / b;
}

// EXPLICAÇÃO DO PROFESSOR
// Function Declarations são completamente definidas no // momento do hoisting, já function expressions apenas // serão definidas no momento da execução. Por isso a // ordem da declaração de uma FE possui importância.

const quadrado = (a) => a * a;
console.log(quadrado(3));
// Embora não seja recomendável simplificar tanto
// impedindo a boa leitura e entendimento do código
// é necessário saber o que está escrito logo acima.

// ---------------------------- //

const instrumento = 'Violino';

// IIFE - ARROW FUNCTION
(() => {
    const instrumento = 'Guitarra';
    console.log(instrumento);
})();

console.log(instrumento);

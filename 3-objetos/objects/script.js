// Crie uma função que verifique
// corretamente o tipo de dado
function verificarDados(dado) {
    return Object.prototype.toString.call(dado); // Retorna o tipo do objeto ao utilizar .toString, mas usa-se o .call pois essa é uma função dos protótipos de Array, String e mais.
}
console.log(verificarDados([]));

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
const quadrado = {};
Object.defineProperties(quadrado, {
    lados: {
        value: 4,
        enumerable: true, // torna enumerável
    },
});
console.log(quadrado);

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
    width: 800,
    height: 600,
    background: '#333',
};
Object.freeze(configuracao);

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array
console.log(Object.getOwnPropertyNames(String.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype));
// essas permitem listar as propriedades quando utilizar biblioteca de terceiros

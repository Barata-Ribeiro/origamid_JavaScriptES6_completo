// Crie uma função para verificar se um valor é Truthy
function verificarTruthy(valor) {
    if (!!valor === true) {
        console.log('Valor é truthy');
        return true;
    } else {
        console.log('Valor é falso.');
        return false;
    }
}
console.log(verificarTruthy(11));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(valor) {
    // return valor + valor + valor + valor; // Também funciona
    return valor * 4;
}
console.log(perimetroQuadrado(5));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}
console.log(nomeCompleto('João', 'Mendes'));

// Crie uma função que verifica se um número é par
function eNumeroPar(numero) {
    if (numero % 2 === 0) {
        console.log('Esse número é par.');
    } else {
        console.log('Esse número é impar.');
    }
}
console.log(eNumeroPar(5));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
// Erro de interpretação
// function idadeSoma(idade) {
//     typeof idade === 'number';
//     return idade + 23;
// }
// console.log(idadeSoma(22));
function tipoDado(dado) {
    return typeof dado;
}
console.log(tipoDado('223'));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function () {
    console.log('João Mendes');
});

// Corrija o erro abaixo

// function precisoVisitar(paisesVisitados) {
//     var totalPaises = 193;
//     function jaVisitei() {
//         return `Já visitei ${paisesVisitados} do total de ${totalPaises} países, e ainda faltam ${
//             totalPaises - paisesVisitados
//         } países para visitar`;
//     }
//     return jaVisitei();
// }
// console.log(precisoVisitar(24));

var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20), jaVisitei(20));

// Por qual motivo o código abaixo retorna com erros?
{
    var cor = 'preto';
    const marca = 'Fiat'; // Não foi definidio fora
    let portas = 4; // Não foi definidio fora
    console.log(cor, marca, portas); // Forma correta do console.
}
console.log(cor);
// console.log(cor, marca, portas);
//Primeiro, estava var em vez de cor, segundo, const e let não estão declarados fora do escopo de bloco.

// Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {
    return x + dois;
}
function dividirDois(x) {
    return x / dois;
}
console.log(somarDois(4), dividirDois(6));

// O que fazer para total retornar 500?
const numero = 50;

for (let numero = 0; numero <= 10; numero++) {
    console.log(numero);
}

const total = 10 * numero;
console.log(total);

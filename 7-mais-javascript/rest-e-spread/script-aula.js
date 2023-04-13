function perimetroForma(lado, totalLados = 4) {
    const argArray = Array.from(arguments);
    argArray.forEach((arg) => {
        console.log(arg);
    });
    console.log(argArray);
    return lado * totalLados;
}

console.log(perimetroForma(10, 4)); // 40
// console.log(perimetroForma(10)); // NaN se não passar nenhum valor ou padrão

// ----------------------------- //

// "É possível declararmos uma parâmetro utilizando ... na frente do mesmo. // Assim todos os argumentos que passarmos na ativação da função, ficarão
// dentro do parâmetro."

function anunciarGanhadores(premio, ...ganhadores) {
    ganhadores.forEach((ganhador) => {
        console.log(`${ganhador} ganhou um ${premio}`);
    });
}

const ganhadores = ['Pedro', 'Marta', 'Maria', 'João', 'Alberto'];

anunciarGanhadores('Carro', ...ganhadores);

// ----------------------------- //  /\

const frutas = ['Banana', 'Uva', 'Morango'];
const legumes = ['Cenoura', 'Batata'];

const comidas = [...frutas, 'Pizza', ...legumes];
console.log(comidas);

const numeros = [3, 4, 5, 6, 1, 3, 4, 6, 7, 56, 5];
const somaNumeros = Math.max(...numeros);

console.log(somaNumeros); // 56

// ----------------------------- //

const btns = document.querySelectorAll('button');

console.log(btns);

const btnsArray = [...btns];

console.log(btnsArray);

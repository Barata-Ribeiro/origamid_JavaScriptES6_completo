const frutas = ['Banana', 'Morango', 'Uva'];
const frase = 'Isso é JavaScript';

fetch('https://pokeapi.co/api/v2/pokemon/').then(({ headers }) =>
    console.log(headers)
);

for (const fruta of frutas) {
    console.log(fruta);
}

// for (const char of frase) {
//     console.log(char);
// }

const buttons = document.querySelectorAll('button');

for (const btn of buttons) {
    btn.style.color = 'blue';
}

console.log(...buttons);

const carro = {
    marca: 'Ford',
    modelo: 'Mustang',
    ano: 2019,
};

console.log(carro);

Object.defineProperties(carro, {
    rodas: {
        value: 4,
        // Só irá mostrar o valor do atributo se enumerable for TRUE
        enumerable: true,
    },
});

for (const key in carro) {
    console.log(`${key}: ${carro[key]}`);
}

// for of para array
// for in para objeto

// ------------------------------ //

const btnUnico = document.querySelector('button');
const btnStyles = getComputedStyle(btnUnico);

for (const style in btnStyles) {
    console.log(`${style}: ${btnStyles[style]}`);
}

// ------------------------------ //

// De algorítimos, algo que não é muito utilizado...
// Mas excelente para aprender!

let i = 0;
do {
    console.log(i++);
} while (i <= 5);

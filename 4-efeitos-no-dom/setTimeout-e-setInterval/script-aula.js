// function espera(texto) {
//     console.log(texto);
// }
// setTimeout(espera, 1000, 'Depois de 1s');

// setTimeout(() => {
//     console.log('Teste setTimeout');
// }, 0);

// for (let i = 0; i <= 20; i++) {
//     // o setTimeout só irá funcionar dentro do loop ao multiplicar o tempo por i
//     setTimeout(() => {
//         console.log(i);
//     }, 1000 * i);
// }

const btn = document.querySelector('button');

btn.addEventListener('click', handleClick);

function handleClick() {
    // É necessário usar arrow function para usar o contexto do objeto pai
    setTimeout(() => {
        this.classList.add('active');
    }, 1000);
}

function loop(texto) {
    console.log(texto);
}

// setInterval(loop, 300, '300ms');
// let i = 0;
// setInterval(() => {
//     console.log(i++);
//     // CUIDADO PARA NAO SETAR 0, RISCO DE TRAVAR O NAVEGADOR!!!
// }, 300);

let i = 0;
const newLoop = setInterval(() => {
    console.log(i++);
    if (i > 20) {
        clearInterval(newLoop);
    }
}, 300);

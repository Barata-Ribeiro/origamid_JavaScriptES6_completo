// Mude a cor da tela para azul e depois para vermelho a cada 2s.
// function mudarClasse() {
//     document.body.classList.toggle('active');
// }

// setInterval(mudarClasse, 2000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const tempo = document.querySelector('.tempo');

iniciar.addEventListener('click', startTime);
pausar.addEventListener('click', stopTime);
pausar.addEventListener('dblclick', resetTime); // dblclick event = double click

let i = 0;
let timer;

function startTime() {
    timer = setInterval(() => {
        tempo.innerText = i++;
    }, 1000); // Timer de 1 segundo
    // Desabilita o botão iniciar para não startar o timer várias vezes
    iniciar.setAttribute('disabled', '');
    // console.log('initTime');
}
function stopTime() {
    clearInterval(timer);
    // Habilita o botão iniciar novamente para poder continuar o timer
    iniciar.removeAttribute('disabled', '');
    // console.log('stopTime');
}
function resetTime() {
    tempo.innerText = 0;
    i = 0;
    // console.log('resetTime');
}

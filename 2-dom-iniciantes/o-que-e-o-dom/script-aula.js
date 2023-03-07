// window.alert('Isso mesmo');

const href = window.location.href;
console.log(href);

if (href === 'http://127.0.0.1:5500/o-que-e-o-dom/') {
    console.log('É igualzinho!!');
}

const h1Selecinado = document.querySelector('h1');
const h1Classes = h1Selecinado.classList;

function callbackh1() {
    console.log('Clicou em ', h1Selecinado.innerText);
}

h1Selecinado.addEventListener('click', callbackh1);

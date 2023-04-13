// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li
const lista = document.querySelectorAll('li');

for (const listKey of lista) {
    listKey.classList.add('blue');
    console.log(listKey);
}

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window

for (const winKey in window) {
    console.log(`${winKey}: ${window[winKey]}`);
}

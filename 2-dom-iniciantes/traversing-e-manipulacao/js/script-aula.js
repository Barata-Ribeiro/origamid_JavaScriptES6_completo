// const h1 = document.querySelector('h1');
// const animaisLista = document.querySelector('.animais-descricao');

// // h1.outerHTML = '<p>Novo Titulo</p>';
// console.log(h1.innerHTML);
// console.log(h1.outerHTML);

// // console.log(animaisLista.innerHTML);

// const lista = document.querySelector('.animais-lista');

// console.log(lista.parentElement);
// console.log(lista.previousElementSibling);
// console.log(lista.nextElementSibling);

// console.log(lista.children[0]); // Arraylike
// console.log(lista.children[--lista.children.length]);
// console.log(lista.querySelector('li:last-child'));

// console.log(lista.previousSibling);

// const animais = document.querySelector('.animais');
// const contato = document.querySelector('.contato');
// const titulo = contato.querySelector('.titulo');
// const mapa = document.querySelector('.mapa');

// contato.replaceChild(lista, titulo);
// // contato.insertBefore(animais, titulo);

// const novoh1 = document.createElement('h1');
// novoh1.innerText = 'Novo Título';
// novoh1.classList.add('titulo');

// mapa.appendChild(novoh1);
// console.log(novoh1);

const h1 = document.querySelector('h1');
const faq = document.querySelector('.faq');
const cloneH1 = h1.cloneNode(true);
cloneH1.classList.add('azul');
faq.appendChild(cloneH1);

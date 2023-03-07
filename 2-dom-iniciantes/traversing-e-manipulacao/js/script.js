// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');
const menuCopia = menu.cloneNode(true);

copy.appendChild(menuCopia);

// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq-lista');
console.log(faq.querySelector('dt:first-child'));

// Selecione o DD referente ao primeiro DT
console.log(faq.querySelector('dt:first-child').nextElementSibling);

// Substitua o conteúdo html de .faq pelo de .animais
const faqContent = document.querySelector('.faq');
const animaisContent = document.querySelector('.animais');

faqContent.innerHTML = animaisContent.innerHTML;

// Retorne no console todas as imagens do site
const imgs = document.querySelectorAll('img');
console.log(imgs);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagens = document.querySelectorAll('img[src*="img/imagem"]');
console.log(imagens);

// Selecione todos os links internos (onde o href começa com #)
const links = document.querySelectorAll('[href^="#"]');
console.log(links);

// Selecione o primeiro h2 dentro de .animais-descricao
const animaisDescricao = document.querySelector('.animais-descricao h2');
console.log(animaisDescricao.firstChild);

// Selecione o último p do site
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[--paragrafos.length]);

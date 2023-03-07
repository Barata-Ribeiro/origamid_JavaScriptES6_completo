// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a');
itensMenu.forEach((link) => {
    link.classList.add('ativo');
});
console.log(itensMenu);

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((link) => {
    link.classList.remove('ativo');
});
itensMenu[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt
const imagens = document.querySelectorAll('img');
imagens.forEach((img) => {
    const possuiAlt = img.hasAttribute('alt');
    console.log(img, possuiAlt);
});
// Modifique o href do link externo no menu
const link = document.querySelector('a[href^="https"]');
link.setAttribute('href', 'https://github.com/');
console.log(link);

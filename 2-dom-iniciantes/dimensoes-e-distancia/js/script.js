// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector('img');
console.log(img.offsetTop);

// Retorne a soma da largura de todas as imagens
function somaImagens() {
    const imgs = document.querySelectorAll('img');
    let soma = 0;
    imgs.forEach((img) => {
        soma += img.offsetWidth;
    });
    console.log(soma);
}
window.onload = function () {
    somaImagens();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');

links.forEach((link) => {
    const linkWidth = link.offsetWidth;
    const linkHeight = link.offsetHeight;
    if (linkWidth >= 48 && linkHeight >= 48) {
        console.log(link, 'Possui acessibilidades');
    } else {
        console.log(link, 'Não possui boa acessibilidades');
    }
});
console.log(links);

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const mobile = window.matchMedia('(max-width: 720px').matches;
const menu = document.querySelector('.menu');

if (mobile) {
    menu.classList.add('menu-mobile');
} else {
    menu.classList.remove('menu-mobile');
}
console.log(menu.classList);

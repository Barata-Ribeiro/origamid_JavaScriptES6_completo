// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll('p');
const totalCarac = Array.prototype.reduce.call(
    paragrafos,
    (a, p) => {
        return a + p.innerText.length;
    },
    0
);
console.log(totalCarac);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function createElement(tag, classe, conteudo) {
    const element = document.createElement(tag);
    classe ? element.classList.add(classe) : null;
    conteudo ? (element.innerHTML = conteudo) : null;
    return element;
}
console.log(createElement('li', 'active', 'Esse é o conteúdo'));

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1T = createElement.bind(null, 'h1', 'titulo');

const cursosJS = h1T('Cursos de JavaScript');
const cursosPHP = h1T('Cursos de PHP');

console.log(cursosJS, cursosPHP);

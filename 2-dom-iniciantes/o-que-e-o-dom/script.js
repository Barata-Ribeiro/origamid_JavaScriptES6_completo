// Retorne o url da página atual utilizando o objeto window
const urlPagina = window.location.href;
console.log('Esse é o URL da página ', urlPagina);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const elementoAtivo = document.querySelector('.ativo');
console.log('Esse é o elemento ativo, ', elementoAtivo);

// Retorne a linguagem do navegador
const lang = window.navigator.language || window.navigator.userLanguage;
console.log('Essa é a linguagem do navegador, ', lang);

// Retorne a largura da janela
const largura = window.innerWidth;
console.log('Essa é a largura total, ', largura);

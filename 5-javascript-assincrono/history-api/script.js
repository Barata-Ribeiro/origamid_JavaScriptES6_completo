// Explicação professor:
// Em obj podemos enviar um objeto com dados
// mas o seu uso é restrito por isso geralmente utilizamos
// null. O title ainda é ignorado por alguns browsers, também
// utilizamos null nele. O url que é parte importante.
window.history.pushState(null, null, 'sobre.html');

// Com o evento popstate, podemos executar uma função
// assim que o usuário clicar no botão voltar/avançar
window.addEventListener('popstate', () => {
    console.log('Teste');
});

const links = document.querySelectorAll('a');

// Função handleClick
function handleClick(e) {
    // Previne o default do evento
    e.preventDefault();
    // Executa a função fetchPage sobre o href, do target, do event
    // ou seja, a URL
    fetchPage(e.target.href);
    // Adiciona ao histórico a mudança de páginas
    window.history.pushState(null, null, e.target.href);
}

// Função async fetchPage que recebe a url de handleClick
async function fetchPage(url) {
    // O código abaixo é apenas uma demonstração de
    // um elemento que mostra ao usuário que o conteúdo
    // está carregando.
    document.querySelector('.content').innerHTML = 'Carregando...';
    // Espera pela resposta do link
    const pageResponse = await fetch(url);
    // Transforma a resposta em texto
    const pageText = await pageResponse.text();
    replaceContent(pageText);
}

// Função para substituir o conteúdo da página
function replaceContent(newText) {
    // Cria uma nova div
    const newHTML = document.createElement('div');
    // Substitui o HTML da nova div, com o texto
    // puxado da função fetchPage (parâmetro pageText)
    newHTML.innerHTML = newText;

    // Seleciona o conteúdo antigo da página
    const oldContent = document.querySelector('.content');
    // Seleciona o conteúdo novo da div newHTML
    const newContent = newHTML.querySelector('.content');

    // Substitui o HTML da antiga div conteúdo com
    // o HTML da nova div
    oldContent.innerHTML = newContent.innerHTML;
    // Substitui o título da página antiga pelo da página nova
    document.title = newHTML.querySelector('title').innerText;
}

window.addEventListener('popstate', () => {
    fetchPage(window.location.href);
});

// Para cada link da constante links
links.forEach((link) => {
    // Adiciona um evento de click que executa a função handleClick
    link.addEventListener('click', handleClick);
});

// Todo esse trabalho tem a função de não recarregar a página
// toda vez que um link é clicado. Podemos então adicionar
// animações para realizar a transação de conteúdo.
// OBSERVAÇÃO:
// Para sites mais pesados, a animação iria demorar
// então seria bacana adicionar uma espécie de loading.
// Este é colocado antes do fetch da url.

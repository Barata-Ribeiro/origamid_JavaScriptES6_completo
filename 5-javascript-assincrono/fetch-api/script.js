// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const inputCEP = document.getElementById('cep'); // input text do CEP
const btnCEP = document.getElementById('btnCEP'); // Botão "Buscar o CEP"
const rCEP = document.querySelector('.resultadoCEP'); // Div onde irá mostrar o CEP

// Adiciona um evento de click, que executa a função handleClick
btnCEP.addEventListener('click', handleClick);

function handleClick(e) {
    // Previne o evento padrão do botão
    e.preventDefault();
    // Variável somente do valor que foi digitado no inputCEP pelo usuário
    const CEP = inputCEP.value;
    // Ativa a função buscaCEP com o CEP digitado pelo usuário
    buscaCEP(CEP);
}

function buscaCEP(CEP) {
    // Utilizando a seguinte API, substitui o CEP da url
    // com o CEP digitado pelo usuário
    fetch(`https://viacep.com.br/ws/${CEP}/json/`)
        // Retorna o json em forma de texto
        .then((r) => r.text())
        .then((body) => {
            // Substitui o texto da div com o texto do arquivo JSON
            console.log(body);
            rCEP.innerText = body;
        });
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s
const crypto = document.querySelector('.crypto');
const cryptoText = document.getElementById('crypto-text');

function returnCrypto() {
    // API com valor do Bitcoin
    fetch('https://blockchain.info/ticker')
        .then((r) => {
            return r.json(); // Arquivo de JSON
        })
        .then((body) => {
            // Variável com o valor do BTC de compra em Real
            const price = body.BRL.buy;
            // Substitui o texto do parágrafo usando toLocaleString
            // na variável acima para transformar o valor do Bitcoin em moeda
            cryptoText.innerText =
                'R$ ' +
                price.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
        });
}
returnCrypto();
// setInterval(returnCrypto, 30000);

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
const piadaContainer = document.querySelector('.piada-container');
const piadaText = document.getElementById('mostrarPiada');
const piadaBtn = document.getElementById('piadaBtn');

piadaBtn.addEventListener('click', handleClickP);

function handleClickP(e) {
    e.preventDefault();
    randomPiada();
}

function randomPiada() {
    // API com as piadas do chuck norris
    fetch('https://api.chucknorris.io/jokes/random')
        .then((r) => r.json()) // Arquivo de JSON
        .then((piada) => {
            // Substitui o innerText ('p') com o value
            // do arquivo JSON contendo a piada do chuck norris
            piadaText.innerText = piada.value;
        });
}
// Ao entrar no site, ele já mostra uma piada
// utilizar o botão para mudar a piada
randomPiada();

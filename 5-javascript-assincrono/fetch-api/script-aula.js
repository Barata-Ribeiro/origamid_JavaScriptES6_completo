// Faz a requisição HTTP com fetch do arquivo txt
const doc = fetch('./doc.txt');

// Método onde o argumento recebido é o callback do valor
// passado na função resolve.
doc.then((r) => {
    // Retorna o texto do arquivo com o método .text,
    // que também é uma promise
    return r.text();
    // Recebe o body da promise anterior
}).then((body) => {
    // Seleciona a div .conteudo
    const conteudo = document.querySelector('.conteudo');
    // Seta o texto da div para ser igual ao texto do arquivo txt
    conteudo.innerText = body;
});

const cep = fetch('https://viacep.com.br/ws/01001000/json/');

cep.then((r) => {
    // Retorna o json
    return r.json();
}).then((body) => {
    const conteudo = document.querySelector('.conteudo');
    // Seta o innerText da div para o logradouro dentro do .json
    conteudo.innerText = body.logradouro;
});

const styleCSS = fetch('./style.css');
styleCSS
    .then((r) => {
        // Retorna o texto do CSS com o método text()
        return r.text();
    })
    .then((body) => {
        const conteudo = document.querySelector('.conteudo');
        // Cria um elemento no document chamado 'style'
        const style = document.createElement('style');
        // Seta o innerHTML the syle, dentro da div, para o texto
        // que veio da promise text
        style.innerHTML = body;
        // Adiciona o element ao final da div
        conteudo.appendChild(style);
    });

const sobre = fetch('./sobre.html');
const div = document.createElement('div');

sobre
    .then((r) => {
        // Retorna todo o código html em forma de texto
        return r.text();
    })
    .then((body) => {
        // Coloca o texto recebido dentro do html da div
        div.innerHTML = body;
        // Cria uma constante chamada título para pegar o
        // 'h1' dentro da div
        const titulo = div.querySelector('h1');
        // Seta o innerText, do 'h1' do documento atual
        // com o mesmo innerText the titulo
        document.querySelector('h1').innerText = titulo.innerText;
        console.log(titulo);
    });

const img = fetch('./imagem.jpg');

img.then((r) => {
    // Retorna do tipo de dado de um arquivo
    // como tamanho, tipo...
    return r.blob();
}).then((body) => {
    // Cria um URL único através da requisição da imagem
    const blobUrl = URL.createObjectURL(body);
    // Constante com a img vazia do documento
    const imagemDom = document.querySelector('img');
    // Seta o src da imagem vazia com a URL criada em blobUrl
    imagemDom.src = blobUrl;
});

fetch('https://viacep.com.br/ws/01001000/json/').then((r) => {
    // Clonamos a resposta com uma nova variável pois a mesma
    // é modificada ao utilizar um método
    const rClone = r.clone();
    // Aqui utilizamos o método json na resposta original
    r.json().then((json) => {
        console.log(json);
    });
    // Aqui utilizamos o método text na resposta clonada
    rClone.text().then((text) => {
        console.log(text);
    });
});

img.then((r) => {
    // .status retorna o status da requisição, 404, 200, 202, etc.
    console.log(r.status); // 200 ou 404 se não existe o arquivo
    // basic, é uma requisição dentro do próprio servidor
    // cors, feito em url body pode estar disponível
    // error, erro de conexão
    // opaque, no-cors, não permite acesso de outros sites
    console.log(r.type);
    // Se o status da requisição for igual a 404
    if (r.status === 404) {
        // Console log, que a página não existe
        console.log('Página não existe');
    }
    // Podemos ver cada um dos dados iteráveis utilizando
    // forEach. headers possui os cabeçalhos da requisição
    return r.headers.forEach(console.log);
});

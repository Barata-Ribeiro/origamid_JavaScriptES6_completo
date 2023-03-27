fetch('https://pokeapi.co/api/v2/pokemon/1/')
    .then((r) => r.json())
    .then((pokemon) => {
        console.log(pokemon);
    });

// ----- EXPLICAÇÃO DO PROFESSOR ----- //
// GET
// Puxa informação, utilizado para pegar posts, usuários e etc.

// POST
// Utilizado para criar posts, usuários e etc.

// PUT
// Geralmente utilizado para atualizar informações.

// DELETE
// Deleta uma informação.

// HEAD
// Puxa apenas os headers.

const url = 'https://jsonplaceholder.typicode.com/posts/1';
const options = {
    // Padrão method é GET, mas foi utilizado o POST
    method: 'POST',
    // Foi setado o Title para JavaScript
    body: '"Title": "JavaScript"',
    // Tipo de conteúdo é setado como JSON
    header: {
        'Content-Type': 'application/json; charset=utf-8',
    },
};

fetch(url, options)
    .then((r) => r.json())
    .then((json) => {
        console.log(json);
    });

fetch(url, {
    method: 'HEAD',
}).then((response) => {
    // Irá puxar cada um dos headers usando um loop entre eles
    response.headers.forEach(console.log);
    console.log(response.headers.get('Content-Type'));
});

// PARA TESTES APENAS!!!!!!!! //
// "É definido no servidor se é permitido ou não o acesso dos recursos através de scripts por outros sites. Utilizando o Access-Control-Allow-Origin. Se o servidor não permitir o acesso, este será bloqueado. É possível passar por cima do bloqueio utilizando um proxy." - Origamid (professor)
const urlGoogle = 'https://cors-anywhere.herokuapp.com/https://www.google.com/';
const div = document.createElement('div');

fetch(urlGoogle)
    .then((r) => r.text())
    .then((r) => {
        // Irá setar o innerHTML da div criada para html do site requisitado
        // através do fetch
        div.innerHTML = r;
        console.log(div);
    });

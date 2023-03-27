// API fetch para buscar o arquivo JSON
fetch('./dados.json')
    // .then((r) => r.json())
    // .then((json) => {
    //     // Posso acessar todos os valores de dentro do arquivo
    //     // JSON como objetos
    //     json.forEach((materia) => {
    //         console.log(materia.tempo);
    //     });
    // Acessar o JSON em forma de texto
    .then((r) => r.text())
    .then((jsonText) => {
        // Irá transformar um texto JSON em um objeto JavaScript.
        const jsonFinal = JSON.parse(jsonText);
        console.log(jsonFinal);
    });

const config = {
    player: 'Google',
    tempo: 25.5,
    aula: '2.1 JavaScript',
};

// Converte o objeto criado em JavaScript
// para uma string em formato JSON e adiciona
// em localStorage
localStorage.config = JSON.stringify(config);

// Acessamos a configuração em JavaScript
// convertendo a string em formato JSON
// para o objeto JavaScript
console.log(JSON.parse(localStorage.config));

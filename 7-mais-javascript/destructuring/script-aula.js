const carro = {
    marca: 'Honda',
    ano: 2023,
};
const { marca, ano, portas } = carro;

console.log(marca, ano);

// --------------------- //

const cliente = {
    nome: 'Andre',
    compras: {
        digitais: {
            livros: ['Livro 1', 'Livro 2'],
            videos: ['Video JS', 'Video HTML'],
        },
        fisicas: {
            cadernos: ['Caderno 1'],
        },
    },
};

console.log(cliente.compras.digitais.livros);
console.log(cliente.compras.digitais.videos);

// Cria-se a constante da seguinte maneira, evitando
// a repetição quando se quer acessar diversas propriedades
// const { livros, videos } = cliente.compras.digitais;

// console.log(livros);
// console.log(videos);

// Da seguinte maneira, criamos 'digitai' com todas as propriedades
// Depois 'fisicas' também com todas as propriedades
// Depois criamos 'livros' e 'videos' que estão dentro de digitais,
const {
    digitais,
    fisicas,
    digitais: { livros, videos },
} = cliente.compras;

console.log(digitais);

const cliente2 = {
    nome: 'Barata',
    compras: 10,
};

// Nome, para ser redefinido, precisa ser propriedade: novoNome
// Posso criar uma propriedade nova dentro da variável, mas a partir
// do momento em que criar dentro do objeto, essa escreve por cima.
const { nome: nomeBarata, compras, email = 'contato@email.com' } = cliente2;

console.log(email);

// -------------------------- //

const frutas = ['Banana', 'Uva', 'Morango'];

// Dessa maneira, já é 'sabido' a ordem do índice das arrays
// e posso dar qualquer nome pra acessar 'frutas' em ordem
const [primeira, segunda, terceira] = frutas;

console.log(primeira, segunda, terceira);

// Declarou as variáveis de uma só vez de acordo com a array
const [primeiro, segundo, terceiro] = ['Item 1', 'Item 2', 'Item 3'];

console.log(primeiro, segundo, terceiro);

// ------------------ //

// Desestruturando os argumentos, acessando diretamente
// os métodos
function handleKeyboard({ key, keyCode }) {
    console.log(key, keyCode);
}

document.addEventListener('keyup', handleKeyboard);

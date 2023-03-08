// const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
// const precos = [49, 99, 69, 89];

// const dados = [
//     new String('Tipo 1'),
//     ['Carro', 'Portas', { cor: 'Azul', preco: 2000 }],
//     function andar(nome) {
//         console.log(nome);
//     },
// ]; // Não utilizado mas o que retorna é o que importa

// const carros = new Array('Ford', 'Fiat', 'Honda');

// carros[2] = 'Ferrari'; // Substitui o Honda
// carros[3] = 'Kia'; // Cria mais uma string
// carros[20] = 'McLaren'; // Cria espaços vazios em array mas que deixa lento e não vale a pena

// console.log(carros.length); // Retorna o tamanho da array

// const li = document.querySelectorAll('li');
// const arrayLi = Array.from(li);

// const obj = {
//     0: 'Casa',
//     1: 'Céu',
//     2: 'Árvore',
//     length: 3, // Precisa-se do length para transformar obj em array
// };

// const objArray = Array.from(obj);
// console.log(objArray);

// console.log(li); // NodeList
// console.log(arrayLi); // Array

// const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
// console.log(frutas.length); // 3 itens, sendo o terceiro uma array

// const musicInst = ['Guitarra', 'Baixo', 'Violão'];
// musicInst.sort(); // Organiza por ordem alfabética

// const idades = [32, 21, 33, 43, 1, 12, 8];
// idades.sort(); // Organiza de acordo com o primeiro número; não serve para botar o número em ordem crescente

// console.log(musicInst);
// console.log(idades);

// ---------------------------- //

// const carros = ['Ford', 'Fiat', 'VW'];
// carros.unshift('Kia', 'Ferrari'); //  adiciona elementos ao início da array e retorna o length da mesma
// carros.push('McLaren', 'Renault'); // adiciona elementos ao final da array e retorna o length da mesma

// console.log(carros);

// console.log(carros.pop()); // Removeu o último elemento, 'Renault' e retornou ele
// console.log(carros.shift()); // Removeu o primeiro elemento, 'Kia' e retornou ele
// console.log(carros); // A Array agora possui apenas 6 itens

// carros.splice(2, 0, 'Fusca'); // Adiciona a partir do segundo item, sem remover nenhum, o item FUSCA
// console.log(carros);

// console.log(carros.reverse()); // Reverte a ordem da array e MODIFICA a array

// ---------------------- //

// console.log(
//     ['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6'].copyWithin(2, 0, 2)
// ); // Irá criar uma cópia dos elementos selecionados da Array, e replicalos a partir do elemento inicialmente escolhido
// console.log(['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(-1));

// console.log(['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 2)); // Vai preencher todos os elementos da array com o valor de fill, ou a partir do index escolhido até o próximo index

// -------------------- //

// const transporte1 = ['Barco', 'Aviao'];
// const transporte2 = ['Carro', 'Moto'];
// const transportes = transporte1.concat(transporte2); // Irá concatenar a primeira array com a segunda e CRIAR uma nova array com todos os elementos

// const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];
// console.log(linguagens.includes('css'), linguagens.includes('ruby')); // Retorna true para o primeiro e false para o segundo, pois a array contem 'CSS' mas não contém 'RUBY'
// console.log(linguagens.indexOf('php')); // Retorna 3, index de PHP

// let htmlString = '<h2>Título Principal</h2>';

// htmlString = htmlString.split('h2'); //Corta o h2 e transforma e uma Array de 3 itens
// htmlString = htmlString.join('h1'); //Junta todos os elementos e coloca o h1 no lugar do h2 ao fazer essa junção

// htmlString = htmlString.split('h2').join('h1'); //Corta o h2, transforma em array e depois junta todos os elementos com h1. Tudo feito em uma única linha respeitando o que é retornado por cada função

// console.log(htmlString);

// ------------------------ //

const linguagens = ['html', 'css', 'js', 'php', 'python'];
const lingCopy = linguagens.slice(); // Cria-se um clone da array
console.log(linguagens.slice());

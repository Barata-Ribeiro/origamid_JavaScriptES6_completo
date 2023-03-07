// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
        descricao: 'Taxa do Pão',
        valor: 'R$ 39',
    },
    {
        descricao: 'Taxa do Mercado',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$ 99',
    },
    {
        descricao: 'Taxa do Banco',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$ 49',
    },
];

let taxaTotal = 0;
let recebimentoTotal = 0;

transacoes.forEach((item) => {
    const cleanNum = +item.valor.replace('R$ ', '');
    if (item.descricao.startsWith('Recebimento')) {
        recebimentoTotal += cleanNum;
    } else if (item.descricao.startsWith('Taxa')) {
        taxaTotal += cleanNum;
    }
});
console.log(recebimentoTotal, taxaTotal);

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const listaTransportes = transportes.split(';');
console.log(listaTransportes);

// Substitua todos os span's por a's
let html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;

html = html.split('span').join('a'); //Primeiro retorna uma array e depois uso propriedade join da array na mesma linha

console.log(html);

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase.charAt(frase.length - 1));
console.log(frase.slice(-1)); //também serve

// Retorne o total de taxas
const transacoes2 = [
    'Taxa do Banco',
    '   TAXA DO PÃO',
    '  taxa do mercado',
    'depósito Bancário',
    'TARIFA especial',
];

let totalTaxa = 0;
let totalDep = 0;
let totalTar = 0;

transacoes2.forEach((item) => {
    item = item.toLowerCase().trim();
    if (item.includes('taxa')) {
        totalTaxa++;
    } else if (item.includes('depósito')) {
        totalDep++;
    } else if (item.includes('tarifa')) {
        totalTar++;
    }
});
console.log(totalTaxa, totalDep, totalTar);

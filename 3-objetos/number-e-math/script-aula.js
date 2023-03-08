console.log(Number.isNaN(NaN)); // NaN é true
console.log(Number.isNaN(5)); // 5 não é NaN, então falso

console.log(Number.isInteger(23)); // True, é integral
console.log(Number.isInteger(12.4)); // Falso, não é integral

console.log(parseFloat('334.52236,50')); //334.52236 pois virgula não serve com numero decimal em JS

console.log(parseFloat('5435 reais')); // retorna apenas o numero se for antes do texto

console.log(parseInt('234.514')); // transforma em integral, tirando os decimais

const preco = 10.324325;
console.log(preco.toFixed()); // string '10'
console.log(preco.toFixed(3)); // string '10.324' com três casas decimais

let valor = 59.99;
valor = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
console.log(valor); // R$ 59,99

console.log(Math.PI); // 3.1415...

const random = Math.floor(Math.random() * 100);
console.log(random);

// Número random entre número maximo e minimo
console.log(Math.floor(Math.random() * (56 - 23 + 1)) + 23);

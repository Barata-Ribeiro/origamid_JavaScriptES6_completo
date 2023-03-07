function areaQuadrado(lado) {
    return lado * lado;
}

console.log(areaQuadrado(5));

function pi() {
    return 3.14;
}

var total = 5 * pi(); // 15.7
console.log(total);
// ou
console.log(pi()); // que retorna o valor da função, 3.14

function imc(peso, altura) {
    var imc = peso / (altura * altura);
    return imc;
}

console.log(imc(88, 1.84));

function corFavorita(cor) {
    if (cor === 'Azul') {
        return 'Eu gosto do céu.';
    } else if (cor === 'Verde') {
        return 'Eu gosto de mato';
    } else {
        return 'Eu não gosto de cores.';
    }
}

// console.log(corFavorita('Azul'));

function mostraConsole() {
    console.log('OI');
}

addEventListener('click', mostraConsole);

function imc2(peso, altura) {
    const imc = peso / altura ** 2;
    console.log(imc);
}

imc2(87, 1.84); // retorna o imc
console.log(imc2(87, 1.84)); // retorna o imc e undefined

function terceiraIdade(idade) {
    console.log(typeof idade);
    if (typeof idade !== 'number') {
        return 'Por favor preencha um número.';
    } else if (idade >= 60) {
        return true;
    } else {
        return false;
    }
}

console.log(terceiraIdade(60));

function faltaVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Falta visitar: ${totalPaises - paisesVisitados} países.`;
}

console.log(faltaVisitar(30)); // está do lado de dentro da função

var profissao = 'Designer';

function dados() {
    var nome = 'João';
    var idade = 26;
    function outrosDados() {
        var endereco = 'Resende';
        var idade = 27;
        return `${nome}, ${idade}, ${endereco}, ${profissao}`;
    }
    return outrosDados();
}

console.log(dados()); // Retorna 'João, 28, Resende, Designer'
// outrosDados(); // retorna um erro, pois ela não foi definida ainda.

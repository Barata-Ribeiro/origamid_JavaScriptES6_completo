// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector('button');
// Aqui estão todos os estilos computados do botão, todos sem exceção
const btnStyles = getComputedStyle(btn);
// console.log(btnStyles.backgroundColor); // Retorna rgb()

// O btnStyles desestruturado
const { backgroundColor, color, margin } = btnStyles;
console.log(backgroundColor, color, margin);

// A seguinte forma consegue declarar novos valores para o estilo
// mas não consegue pegar os valores computados
// console.log((btn.style.backgroundColor = 'blue'));

// Troque os valores das variáveis abaixo
let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';

// A maneira correta de trocar os valores das variáveis
// sem que haja conflito de ambas terem o mesmo valor
[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo];
console.log(cursoAtivo, cursoInativo);

// Corrija o erro abaixo
const cachorro = {
    nome: 'Bob',
    raca: 'Labrador',
    cor: 'Amarelo',
};

// Foi feita a troca de "bobCor: cor" para "cor: bobCor" pois estamos
// puxando o que está dentro do objeto e, bobCor não existe.
const { cor: bobCor } = cachorro;
console.log(bobCor);

// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
var numero = 500;
scroll += numero;
console.log(scroll);

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito =
    possuiCarro && possuiCasa ? 'Pode dar crédito' : 'Não pode dar credito'; // Acredito que pode usar os operadores lógicos || ou && visto que, no caso em específico, ambos são true.
console.log(darCredito);

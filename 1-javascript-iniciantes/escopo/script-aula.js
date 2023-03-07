function mostrarCarro() {
    var carro = 'Fusca';
    console.log(carro);
}

mostrarCarro(); // Fusca no console
//   console.log(carro); // Erro, carro is not defined pois a variavel esta dentro da função

{
    var mes = 'Fevereiro';
    console.log(mes);
}
// console.log(mes);
// {
//     let ano = '2023';
//     console.log(ano);
// }
// console.log(ano); // Esse não funciona usando let e const. Var vaza o bloco.

{
    var carro2 = 'Fusca';
    // const ano = 2018;
}
console.log(carro2); // Carro
//   console.log(ano); // erro ano is not defined

// for (let i = 0; i <= 10; i++) {
//     console.log(`Número ${i}`);
// }

const semana = 'Sexta';
// const semana = 'Quinta'; Esse não funciona pois a const semana já foi declarada.
console.log(semana);

const data = {
    ano: 2023,
    mes: 'Fevereiro',
};
data.ano = 2024;
data.dia = 23;

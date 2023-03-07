var numero = 20;
var numero2 = 10;

numero += numero2; // numero = numero + numero2
console.log(numero);

var idade = 20;
var naoPossuiDiabetes = false;
var podeBeber;
podeBeber =
    idade >= 18 && naoPossuiDiabetes ? 'Pode beber.' : 'Não pode beber.'; // Valores booleanos não fazem sentido serem retornados; true e false
console.log(podeBeber);

var possuiFaculdade = true;
if (possuiFaculdade) console.log('Sim, possui faculdade.');

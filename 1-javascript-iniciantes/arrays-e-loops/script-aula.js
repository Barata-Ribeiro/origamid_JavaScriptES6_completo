var videoGames = ['Switch', 'PS4', 'XBOX', '3DS'];

// var ultimoItem = videoGames.pop();
// videoGames.push('3DS');

for (var numero = 0; numero <= 4; numero++) {
    console.log(numero);
}

var i = 0;
while (i <= 10) {
    console.log(i);
    i = i + 5;
}
// Retorna de 0 a 9 no console

var videoGames = ['Switch', 'PS4', 'XBOX', '3DS'];

for (var i = 0; i < videoGames.length; i++) {
    console.log(videoGames[i]);
    if (videoGames[i] === 'PS4') {
        break;
    }
}

var frutas = ['Carambola', 'Banana', 'Maça', 'Pêra', 'Abacaxi'];

frutas.forEach(function (fruta, index, array) {
    console.log(fruta, index, array);
});

var numero = 0;
var maximo = 10;
for (; numero <= maximo; ) {
    console.log(numero);
    numero++;
}

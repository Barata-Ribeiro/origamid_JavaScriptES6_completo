class Veiculo {
    constructor(rodas, combustivel) {
        this.rodas = rodas;
        this.combustivel = combustivel;
    }
    acelerar() {
        console.log('Acelerou...');
    }
}

class Moto extends Veiculo {
    // "Podemos utilizar o super para estendermos o método constructor."
    // Precisa passar primeiro os atributos do pai e depois os novos
    constructor(rodas, combustivel, capacete) {
        // Dentro de super colocar os atributos do pai
        super(rodas, combustivel);
        // Agora criamos os novos atributos
        this.capacete = capacete;
    }
    empinar() {
        console.log('Moto empinou com ' + this.rodas + ' rodas.');
    }
    // "Podemos escrever por cima de um método herdado."
    // Mas lembrando que não irá substituir o valor anterior,
    // se buscar o prototype dele, irá verificar que ambos existem
    acelerar() {
        // Agora acessarmos os métodos e propriedades da classe pai.
        super.acelerar();
        console.log('Acelerou muito rápido!');
    }
}

const honda = new Moto(2, 'Gasolina', true);
const ferrari = new Veiculo(4);

const promesa = new Promise((resolve, reject) => {
    let condicao = true;
    if (condicao) {
        // if true, resolve a promise
        resolve('Promise resolvida');
    } else {
        // else, rejeita a promise
        reject(Error('Um error ocorreu na Promise'));
    }
});

// Verifica se a promise foi resolvida
promesa.then((resolucao) => {
    // Só será ativado quando a promise for resolvida
    console.log(resolucao);
});

const promesa2 = new Promise((resolve, reject) => {
    let condicao = true;
    if (condicao) {
        // Vai esperar 1 seg passar
        setTimeout(() => {
            // Depois de 1 seg, resolve a promise
            resolve('Promise 2 resolvida');
        }, 1000);
    } else {
        reject(Error('Um error ocorreu na Promise'));
    }
});

// then irá retornar outra promise
const retorno = promesa2
    // primeiro then
    .then((resolucao) => {
        resolucao.profissao = 'Designer';
        return resolucao;
    })
    // segundo then e assim por diante
    .then((resolucao) => {
        console.log(resolucao);
    })
    // catch será ativado caso a promise seja rejeitada
    // pode ser direto com segundo argumento de .then
    // sem a necessidade do .catch
    .catch((rejeitada) => {
        // retorna o reject
        console.log(rejeitada);
    })
    // SEMPRE será executado, a promise sendo True ou False
    // Não recebe argumento, só executa uma função
    .finally(() => {
        console.log('Acabou!!');
    });

console.log(retorno);

const login = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Usuário logado.');
    }, 1000);
});

const dados = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Dados carregados.');
    }, 1500);
});

// EXPLICAÇÃO DO PROFESSOR
// Retornará uma nova promise assim que todas as promises
// dentro dela forem resolvidas ou pelo menos uma rejeitada.
const tudoCarregado = Promise.all([login, dados]);
tudoCarregado.then((resolucao) => {
    // Irá retornar a array e portanto, pode ser trabalhada
    // como uma array qualquer
    console.log(resolucao); // Array com ambas respostas
});
console.log(tudoCarregado);

// EXPLICAÇÃO DO PROFESSOR
// Retornará uma nova promise assim que a primeira promise
// for resolvida ou rejeitada.
const carregouPrimeiro = Promise.race([login, dados]);
carregouPrimeiro.then((resposta) => {
    console.log(resposta); // Login Efetuado, pois é a resolvida primeiro
});

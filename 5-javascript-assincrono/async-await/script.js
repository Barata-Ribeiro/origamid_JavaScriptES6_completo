// Async function é uma função com partes assíncronas
// onde a resolução é aguardada antes de continuar.
async function puxarDados() {
    // Ele tenta executar...
    try {
        // O await indica a promise que devemos esperar.
        const responseDados = await fetch('./dados.json');
        const jsonDados = await responseDados.json();
        document.body.innerText = jsonDados.aula;
        // console.log(jsonDados.aula);
        // Se tiver error, ele mostra no console pelo catch
    } catch (error) {
        console.log(error);
    }
}
puxarDados();

// Código do professor para iniciar fetch ao mesmo tempo:
async function iniciarAsync() {
    const dadosResponse = fetch('./dados.json');
    const clienteResponse = fetch('./clientes.json');

    // Explicação professor: Ele espera o que está dentro
    // da expressão () ocorrer primeiro...
    const dadosJSON = await (await dadosResponse).json();
    const clienteJSON = await (await clienteResponse).json();

    console.log(dadosJSON);
    console.log(clienteJSON);
}
iniciarAsync();

// O código abaixo não faz sentido pois await espera
// o resultado da promise. Sem uma promise, o código funciona
// da mesma forma, tanto faz tanto fez...
async function asyncSemPromise() {
    // Console não irá esperar.
    await setTimeout(() => console.log('Depois de 1s'), 1000);
    console.log('acabou');
}
asyncSemPromise();

// Criando uma nova promise na frente do setTimeout,
// ele irá resolver e, depois de 1s, mostrar o log.
async function iniciarAsync() {
    await new Promise((resolve) => {
        setTimeout(() => resolve(), 1000);
    });
    console.log('Depois de 1s');
}
iniciarAsync();

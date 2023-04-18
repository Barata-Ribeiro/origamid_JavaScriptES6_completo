const cpfsList = document.querySelectorAll('.cpf li');

// Function Declaration que retorna um array com o 'innerText' dos elementos
const elementsInnerText = ([...elements]) => {
    // Retorna uma nova array com o 'innerText' dos elementos
    return elements.map((element) => element.innerText);
};

// Function Declaration que retorna os CPFs limpos
const limparCPF = (cpf) => {
    return cpf.replace(/\D/g, '');
};

// Function Declaration que constrói o CPF com o padrão
const contruirCPF = (cpf) => {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
};

// Function Declaration que formata os CPFs
// primeiro limpando e depois construindo com o padrão
const formatarCPFS = (cpfs) => {
    return cpfs.map(limparCPF).map(contruirCPF);
};

// Function Declaration que substitui os CPFs no DOM
const substituirCPF = (cpfsElements) => {
    // Retorna uma nova array com o 'innerText' dos elementos
    const cpfs = elementsInnerText(cpfsElements);
    // Retorna uma nova array com os CPFs formatados
    const cpfsFormatados = formatarCPFS(cpfs);
    // Para cada CPF na lista 'li'... Parâmetros CPF e index
    cpfsElements.forEach((cpfElement, index) => {
        // Substitui o CPF na lista 'li' com o CPF formatado de acordo com o index
        cpfElement.innerText = cpfsFormatados[index];
    });
};

substituirCPF(cpfsList);

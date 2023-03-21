const controles = document.getElementById('controles'); // Form
const cssText = document.querySelector('.css'); // Código do usuário
const btn = document.querySelector('.btn'); // Botão a ser modificado

// Adiciona evento de mudança ao controle (form) com a função handleChange
controles.addEventListener('change', handleChange);

// Cria um objeto que irá setar as propriedades CSS em handleChange
const handleStyle = {
    // Elemento que irá ser modificado = btn
    element: btn,
    texto(value) {
        this.element.innerText = value;
    },
    color(value) {
        this.element.style.color = value;
    },
    backgroundColor(value) {
        this.element.style.backgroundColor = value;
    },
    height(value) {
        this.element.style.height = value + 'px';
    },
    width(value) {
        this.element.style.width = value + 'px';
    },
    border(value) {
        this.element.style.border = value;
    },
    borderRadius(value) {
        this.element.style.borderRadius = value + 'px';
    },
    fontFamily(value) {
        this.element.style.fontFamily = value;
    },
    fontSize(value) {
        this.element.style.fontSize = value + 'rem';
    },
};

// Função que realizará as modificações no botão
function handleChange(event) {
    // Nome da propriedade
    const name = event.target.name;
    // Valor da propriedade
    const value = event.target.value;

    // Irá setar as propriedades do objeto de acordo com o event
    handleStyle[name](value);
    // Executa função que irá salvar os valores na localStorage
    saveValues(name, value);
    // Mostra o código CSS para o usuário
    showCss();
}
// Salva os valores no localStorage
function saveValues(name, value) {
    localStorage[name] = value;
}

// Função que seta os valores que estão salvos no localStorage na página
function setValues() {
    // Cria variável com as keys do localStorage
    const properties = Object.keys(localStorage);
    // Loop para cada um dos valores
    properties.forEach((property) => {
        // Seta as propriedades dos controles com as keys salvas em localStorage
        controles.elements[property].value = localStorage[property];
        // Seta as propriedades de handleStyle com as keys salvas em localStorage
        handleStyle[property](localStorage[property]);
    });
    // Mostra o código CSS para o usuário
    showCss();
}
// Executa a função imediatamente
setValues();

// Função para mostrar o código CSS para o usuário
function showCss() {
    // Modifica o HTML de cssText, criando um span para cada propriedade CSS: <span> +
    // então usa .split '; ' para separar os elementos,
    // e, finalmente, utiliza .join com ';</span><span>' para que os elementos sejam cercados por spans
    cssText.innerHTML =
        '<span>' + btn.style.cssText.split('; ').join(';</span><span>');
}

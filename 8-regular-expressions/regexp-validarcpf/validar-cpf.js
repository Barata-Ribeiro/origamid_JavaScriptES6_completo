export default class ValidarCpf {
    constructor(element) {
        // this.element é o elemento do formulário
        this.element = element;
    }
    // Método para limpar o CPF
    limpar(cpf) {
        // Limpa os dígitos do CPF
        return cpf.replace(/\D/g, '');
    }
    // Método para construir o CPF
    construir(cpf) {
        // Constrói o CPF com o formato 000.000.000-00
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
    }
    // Método para formatar o CPF
    formatar(cpf) {
        // Primeiro limpa o CPF
        const cpfLimpo = this.limpar(cpf);
        // Retorna o CPF formatado
        return this.construir(cpfLimpo);
    }
    // Método para validar o CPF
    validar(cpf) {
        // Verifica se o CPF é válido com match
        const matchCpf = cpf.match(/(?:\d{3}[-.\s]?){3}\d{2}/g);
        // Verifica se o CPF é igual ao padrão
        return matchCpf && matchCpf[0] === cpf;
    }
    // Método para validar o CPF na mudança
    validarNaMudanca(cpfElement) {
        // Se o CPF estiver válido...
        if (this.validar(cpfElement.value)) {
            // Retorna o CPF formatado para o usuário
            cpfElement.value = this.formatar(cpfElement.value);
            // Pinta a borda do 'input' de verde com a classe 'valido'
            cpfElement.classList.add('valido');
            // Garante que a classe 'error' não apareça
            cpfElement.classList.remove('error');
            // Garante que a classe 'ativo' não apareça
            cpfElement.nextElementSibling.classList.remove('ativo');
            // Se o CPF não estiver válido...
        } else {
            // Pinta a borda do 'input' de vermelho com a classe 'error'
            cpfElement.classList.add('error');
            // Garante que a classe 'valido' não apareça
            cpfElement.classList.remove('valido');
            // Adiciona a classe 'ativo' abaixo do 'input', fazendo ela aparecer
            cpfElement.nextElementSibling.classList.add('ativo');
        }
    }
    // Método que adiciona um evento para o formulário
    adicionarEvento() {
        // O evento de 'change' é executado quando o CPF for alterado
        this.element.addEventListener('change', () => {
            // Realiza a validação do CPF na mudança
            this.validarNaMudanca(this.element);
        });
    }
    // Método que adiciona um span com o texto 'CPF inválido'
    adicionarErrorSpan() {
        // Cria um span
        const errorElement = document.createElement('span');
        // Adiciona a classe 'errorText' ao span
        errorElement.classList.add('errorText');
        // Adiciona o texto 'CPF inválido' ao span
        errorElement.innerText = 'CPF inválido';
        // Adiciona o span no elemento pai, antes do elemento especificado
        this.element.parentElement.insertBefore(
            // Elemento de erro
            errorElement,
            // nextSibling NESSE caso seria o 'label' Email
            this.element.nextSibling
        );
    }
    // Método que inicializa o objeto
    init() {
        // Adicionar um evento ao formulário
        this.adicionarEvento();
        // Adicionar um span com o texto 'CPF inválido'
        this.adicionarErrorSpan();
        // Retorna o objeto
        return this;
    }
}

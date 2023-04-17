const regexp = /\w+[-.]/gi;
const regexpC = new RegExp('\\w+', 'gi');

const phrase = 'The quick brown fox jumps over the lazy dog';
console.log(phrase.replace(regexp, 'x'));

console.log(regexp.flags); // gi
console.log(regexp.global); // true
console.log(regexp.ignoreCase); // true
console.log(regexp.source); // \w+

console.log('---------------------------');
// MÉTODOS

const regexpNew = /Java/g;
const newPhrase = 'JavaScript e Java Linguagem 101';

let i = 1;
while (regexpNew.test(newPhrase)) {
    console.log(i++, regexpNew.lastIndex);
}

console.log('---------------------------');

const regexpNew2 = /\w+/g;
const newPhrase2 = 'JavaScript, TypeScript, CoffeeScript, Java';

// Variável para salvar os resultados na mesma
let regexpResult;
// Enquanto a variável for encontrada, salvar os resultados na mesma
// sendo este diferente de null
while ((regexpResult = regexpNew2.exec(newPhrase2)) !== null) {
    // Mostra o resultado na tela, sendo a variável uma array
    // regexpResult[0] irá mostrar o primeiro e assim por diante...
    console.log(regexpResult);
}

console.log('---------------------------');

const result1 = newPhrase2.match(regexpNew2);
// Retorne uma array com todos os resultados
// Se não tiver match, retorna null
console.log(result1);

console.log('---------------------------');

const regexpNew3 = /[, ]+/g;

const result2 = newPhrase2.split(regexpNew3);
console.log(result2);

console.log('---------------------------');

const tags = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`;

const tagsRegexp = /(?<=<\/?)\w+/g;

// Irá pegar todos os elementos que contenham o tag capturado
// e irá adicionar a classe desejada, "active"
const replaceResult = tags.replace(tagsRegexp, '$& class="active"');
console.log(replaceResult);

console.log('---------------------------');

const emails = `
empresa@email.com
contato@email.com
suporte@email.com
`;

const emailsRegexp = /(\w+@)([\w.]+)/g;

console.log(emails.replace(emailsRegexp, '$1gmail.com'));

console.log('---------------------------');

const newEmails = `joao@homail.com.br
marta@ggmail.com.br
bruna@oulook.com.br `;

const emailsResult = newEmails.replace(emailsRegexp, function (...args) {
    console.log(args);
    if (args[2] === 'homail.com.br') {
        return args[1] + 'hotmail.com.br';
    } else if (args[2] === 'ggmail.com.br') {
        return args[1] + 'gmail.com.br';
    } else if (args[2] === 'oulook.com.br') {
        return args[1] + 'outlook.com.br';
    } else {
        return 'Nenhum email encontrado...';
    }
});

console.log(emailsResult);

import initSmoothScroll from './modules/smooth-scroll.js';
import initScrollAnimation from './modules/anima-scroll.js';
import initAccordion from './modules/accordion.js';
import initTabNav from './modules/tab-nav.js';

// Ele vem de um objeto quando importando tudo sem necessidade do nome
import * as teste from './modules/teste.js';
teste.teste1();
teste.teste2();
console.log(teste.senha); // Para usar config em diferentes lugares

// É possível exportar mais de uma função, mas não é recomendável
// import { teste1, teste2 } from './modules/teste.js';
// teste1();
// teste2();

initSmoothScroll();
initScrollAnimation();
initTabNav();
initAccordion();

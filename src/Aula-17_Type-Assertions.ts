// Type Assertions 
// Type Casting sub-tipos
/* Recomendado */
// Condicional
const body = document.querySelector('body');
if (body) body.style.background = 'black';


// non null assertion (!)
const body2 = document.querySelector('body')!;
body2.style.background = "black";

// Type assertion
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = "black";

// HTMLElement

const input = document.querySelector('input') as HTMLInputElement;
input.value = "qualquer coisa";
input.focus();

/* Não Recomendado */
// Apenas subtipos
const body4 = document.querySelector('body') as unknown as number;
body3.style.background = "black";


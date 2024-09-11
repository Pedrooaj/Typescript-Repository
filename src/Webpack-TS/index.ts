import funcao  from './mod'

const body = document.querySelector('body') as HTMLBodyElement;

funcao();

body.innerHTML = '<h1>Typescript juntamente com Webpack</h1>'
body.style.fontFamily = 'sans-serif'


export default body;
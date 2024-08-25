// Tipo Any e basicamente um coringa onde ele aceita qualquer tipo primitivo
// Utilizar Any apensa em ultimo caso!!
function showMessage(msg: any) {
  return msg;
}
console.log(showMessage([1, 2, 3]));
console.log(showMessage("Olá"));
console.log(showMessage(1));

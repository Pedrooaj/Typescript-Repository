// tipo tupla


// tupla mutavel
const dadosCliente: [number, string] = [1, "Luiz"];
const dadosCliente2: [number, string, string?] = [1, "Luiz", "Otavio"];
const dadosCliente3: [number, string, ...string[]] = [1, "Luiz", "Otavio"];

dadosCliente[0] = 100;

console.log(dadosCliente);
console.log(dadosCliente2);
console.log(dadosCliente3);

//tupla imutavel

const dadosClienteImutavel: readonly [number, string] = [1, "Pedro"];





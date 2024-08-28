// tipo literal 

let x = 11;
const y = 10; // tipo literal pois ele nunca muda e não consegue ser reatribuido
let a: 100 = 100; // tipo literal com let

let Pessoa = {
    nome: "Pedro" as const,
    sobrenome: "Lemos"
}

function escolhaCor(cor: "Amarelo" | "Vermelho" | "Azul"): string{
    return cor;
}
console.log(escolhaCor('Amarelo'))
export default 1;
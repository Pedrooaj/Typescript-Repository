// declaration merge
interface Pessoa{
    nome: string;
}

interface Pessoa {
    readonly sobrenome: string;
}

interface Pessoa {
    readonly enderecos: readonly string[];
}

interface Pessoa {
    readonly idade?: number;
}

const pessoa: Pessoa = {
    nome: "Pedro",
    sobrenome: "Lemos",
    enderecos: ['Av Brasil']
}

console.log(pessoa);


export default 0;
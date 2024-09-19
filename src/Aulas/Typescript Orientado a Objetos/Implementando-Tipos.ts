type TipoNome = {
    nome: string;
}

type TipoSobrenome = {
    sobrenome: string;
}

type NomeCompleto = {
    nomeCompleto(): string;
}

export class Pessoa implements TipoNome,TipoSobrenome,NomeCompleto {
    constructor(
        public nome: string,
        public sobrenome: string
    ) {}

    nomeCompleto(): string {
        return this.nome + " " + this.sobrenome
    }
}

const pessoa = new Pessoa("Pedro", "Antonio");

console.log(pessoa.nomeCompleto());

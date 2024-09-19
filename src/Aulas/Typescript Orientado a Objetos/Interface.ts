interface TipoNome {
    nome: string;
}

interface TipoSobrenome {
    sobrenome: string;
}

interface NomeCompleto {
    nomeCompleto(): string;
}

// type TipoPessoa = NomeCompleto & TipoNome & TipoSobrenome;
interface TipoPessoa extends NomeCompleto,TipoNome,TipoSobrenome {}

export class Pessoa implements TipoPessoa {
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

// Implementando interface em objetos

const PessoaObj: TipoPessoa = {
    nome: "Pedro",
    sobrenome: "Lemos",
    nomeCompleto() {
        return this.nome + " " + this.sobrenome;
    },
}

console.log(PessoaObj.nomeCompleto());

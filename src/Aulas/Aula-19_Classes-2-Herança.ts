export class Pessoa {
    public nome: string;
    public sobrenome: string;
    private idade: number;
    protected cpf: string;

    constructor(nome: string, sobrenome: string, idade: number, cpf: string) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.cpf = cpf;
    }

    public getIdade(): number {
        return this.idade;
    }

    public getCpf(): string {
        return this.cpf;
    }

    public getNomeCompleto(): string {
        return "Pessoa: " + this.nome + " " + this.sobrenome;
    }
}


export class Aluno extends Pessoa {
    public getNomeCompleto(): string {
        return `Aluno: ${this.nome} ${this.sobrenome}`;
    }
}
export class Cliente extends Pessoa {
    public getNomeCompleto(): string {
        return `Cliente: ${this.nome} ${this.sobrenome}`;
    }
}

const p1 = new Pessoa("Nome", "Sobrenome", 12, "CPF");
const a1 = new Aluno("Nome", "Sobrenome", 18, "123.123.123-12");
const c1 = new Cliente("Nome", "Sobrenome", 80, "CPF");

console.log(p1.getNomeCompleto());
console.log(a1.getNomeCompleto());
console.log(c1.getNomeCompleto());




// Super Classe e a classe predominante o Pai da hierarquia
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

// Sub-classe são classes filhas da maior
export class Aluno extends Pessoa {
    public sala: string;
    constructor(nome: string, sobrenome: string, idade: number, cpf: string, sala: string){
        // no caso a seguir o super esta fazendo referencia para alterar o construtor Pai.
        super(nome,sobrenome,idade,cpf);        
        this.sala = sala;
    }


    public getNomeCompleto(): string {
        console.log("Fazendo algo antes");
        // o super se refere a classe pai.
        const result = super.getNomeCompleto();
        return result + "Hey";
        
    }
}
export class Cliente extends Pessoa {
    public getNomeCompleto(): string {
        return `Cliente: ${this.nome} ${this.sobrenome}`;
    }
}

const p1 = new Pessoa("Nome", "Sobrenome", 12, "CPF");
const a1 = new Aluno("Nome", "Sobrenome", 18, "123.123.123-12", '01');
const c1 = new Cliente("Nome", "Sobrenome", 80, "CPF");

console.log(p1.getNomeCompleto());
console.log(a1);
console.log(c1.getNomeCompleto());



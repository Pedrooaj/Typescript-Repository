export class Pessoa {
    constructor(
        private nome: string,
        private sobrenome: string,
        private idade: number,
        protected _cpf: string
    ) { }


    // Getter de forma antiga
    public getCpf(): string{
        console.log("Getter antigo executado");
        return this.cpf;
    }

    // Setter de forma antiga
    public setCpf(cpf: string): void{
        console.log("Setter antigo executado");
        this.cpf = cpf;
    }

    // Nova forma de fazer Set
    set cpf(cpf: string){
        console.log("Setter moderno executado");
        this._cpf = cpf;
    }

    get cpf(){
        console.log("Getter moderno chamado");
        return this._cpf;
    }
}


const p1 = new Pessoa("Pedro", "Lemos", 18, "12312");

p1.cpf = '123123123123123131';

console.log(p1.cpf);

export class Pessoa {
    // Atributo static você consegue obter de forma global/local em formato de classe Pessoa.atributo
    static idadePadrao = 0;
    static cpfPadrao = '000.000.000-0';

    constructor(
        public nome: string,
        public sobrenome: string,
        public idade: number,
        public cpf: string
    ) { }


    
    // metodos funcionam da mesma forma que atributos de forma global/local na classe Pessoa.metodo
    static criaPessoa(nome: string, sobrenome: string): Pessoa{
        return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
    }
}


const p1 = new Pessoa("Pedro", "Lemos", 18, "12312");
p1.cpf = '123123123123123131';

const p2 = Pessoa.criaPessoa("Pedro", "Lemos");


console.log(p2);


